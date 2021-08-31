import {Component, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {Part} from "../part";

@Component({
  selector: 'app-admin-stock',
  templateUrl: './admin-stock.component.html',
  styleUrls: ['./admin-stock.component.css']
})
export class AdminStockComponent implements OnInit {

  parts: any;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {

  }


  updateStock(newStock: any, part: Part) {
    console.log('Update: ' + newStock);
    part.stock = newStock;
    this.clientService.updatePartStock(part).subscribe();
  }

  initModelId($event: number) {
    this.clientService.getAllPartByModelId($event).subscribe(result => {
      this.parts = result;
    })
  }
}
