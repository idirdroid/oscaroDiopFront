import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
baseUrl='http://localhost:8080/admin/'

  constructor(private http:HttpClient) { }

  getAllBrand() {
    return this.http.get(this.baseUrl+'brand');
  }

  getModelByBrand(idBrand: number) {
    return this.http.get(this.baseUrl+'models/' + idBrand);
  }
}
