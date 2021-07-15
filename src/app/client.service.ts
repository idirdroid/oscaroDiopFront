import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Brand} from "./brand";
import {Model} from "./model";
import {Observable} from "rxjs";
import {Part} from "./part";
@Injectable({
  providedIn: 'root'
})
export class ClientService {
baseUrl='http://localhost:8080/admin/'

  constructor(private http:HttpClient) { }

  getAllBrand():Observable<Brand[]> {
    return this.http.get<Brand[]>(this.baseUrl+'brand');
  }

  getModelByBrand(idBrand: number): Observable<Model[]> {
    return this.http.get<Model[]>(this.baseUrl+'models/' + idBrand);
  }

  getAllPartByModelId(modelId: number) {
    return this.http.get< Part[]>(this.baseUrl+'parts/getPartsByModel/'+modelId)
  }
}
