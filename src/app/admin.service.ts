import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Brand} from "./brand";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = 'http://localhost:8080/admin/'

  constructor(private http: HttpClient) { }

  createBrand(brand: Brand){
    this.http.post(this.baseUrl + 'admin/brand/', brand)
  }



}
