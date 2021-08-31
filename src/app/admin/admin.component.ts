import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  nbBrand: any;
  nbModel:any;
  alertPartStock:any;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getNumberOfBrand().subscribe(result => {
      this.nbBrand=result;
    });
    console.log(this.nbBrand);
    this.clientService.getNumberOfModel().subscribe(result => {
      this.nbModel=result;
    });

    this.clientService.getAlertStocks().subscribe(result=>{
      this.alertPartStock=result;
    })
  }

  initModelId($event: number) {

  }
}
