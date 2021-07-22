import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Brand} from "./brand";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = 'http://localhost:8080/admin/'

  constructor(private http: HttpClient) { }

  createBrand(brand: Brand | undefined): Observable<Brand> {
    return this.http.post<Brand>(this.baseUrl + 'brand/', brand)
  }



}
