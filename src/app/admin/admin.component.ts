import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  nbBrand: any;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.nbBrand=this.clientService.getNumberOfBrand().subscribe(result => {
      this.nbBrand=result;
    });
    console.log(this.nbBrand);
  }

  initModelId($event: number) {

  }
}
