import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";

@Component({
  selector: 'app-admin-stock',
  templateUrl: './admin-stock.component.html',
  styleUrls: ['./admin-stock.component.css']
})
export class AdminStockComponent implements OnInit {

  parts : any;

  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllPartByModelId(1).subscribe(result => {
      this.parts = result;
    })
  }


  updateStock(stock : any) {
    console.log('Update: ' + stock);

  }
}
