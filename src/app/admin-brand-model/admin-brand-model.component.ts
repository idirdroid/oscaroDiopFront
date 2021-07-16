import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";

@Component({
  selector: 'app-admin-brand-model',
  templateUrl: './admin-brand-model.component.html',
  styleUrls: ['./admin-brand-model.component.css']
})
export class AdminBrandModelComponent implements OnInit {
  brandList: any;

  constructor(private clientService: ClientService ) { }

  ngOnInit(): void {
    this.clientService.getAllBrand().subscribe(result =>{
      this.brandList= result;
    })
  }

}
