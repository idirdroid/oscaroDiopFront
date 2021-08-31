import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Brand} from "./brand";
import {Model} from "./model";
import {Observable} from "rxjs";
import {Part} from "./part";
import {PartType} from "./partType";
import {PartGroup} from "./partGroup";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = 'http://localhost:8080/admin/'

  constructor(private http: HttpClient) {
  }

  getAllBrand(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.baseUrl + 'brand');
  }

  getNumberOfBrand(): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'brand/nbBrand');
  }
  getModelByBrand(idBrand: number): Observable<Model[]> {
    return this.http.get<Model[]>(this.baseUrl + 'models/' + idBrand);
  }

  getAllPartByModelId(modelId: number) {
    return this.http.get<Part[]>(this.baseUrl + 'parts/getPartsByModel/' + modelId)
  }


  getAllTypePartByGroupId(groupId: number) {
    console.log('Execution de l\'appel API')
    return this.http.get <PartType []>(this.baseUrl + 'parttype/' + groupId)
  }

  getAllGroupPart() {
    return this.http.get<PartGroup[]>(this.baseUrl + 'partgroup');
  }

  getPartListByModelByPartType(modelId: number, partTypeId: number) {
    return this.http.get<Part[]>(this.baseUrl + 'parts/getPartsByModelByPartType/' + modelId + '/' + partTypeId)
  }

  getPartById(id: number): Observable<Part> {
    return this.http.get<Part>(this.baseUrl + 'parts/' + id);
  }


  updatePartStock(part: Part) {
    return this.http.put(this.baseUrl + 'parts/update/' + part.id, part);
  }


  getNumberOfModel(){
    return this.http.get(this.baseUrl+'models/nbModelByBrand');
  }

  getAlertStocks(){
    return this.http.get(this.baseUrl+'models/alertstock');
  }
}
