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
    this.clientService.updatePartInfo(part).subscribe();
  }

  initModelId($event: number) {
    this.clientService.getAllPartByModelId($event).subscribe(result => {
      this.parts = result;
    })
  }

  updateDescription(value: string, part: Part) {
    part.description = value;
    this.clientService.updatePartInfo(part).subscribe();
  }

  updateReference(value: string, part: Part) {
    part.reference = value;
    this.clientService.updatePartInfo(part).subscribe();
  }

  updatePublicPrice(value: any, part: Part) {
    part.publicPrice = value;
    this.clientService.updatePartInfo(part).subscribe();
  }

  updatePrivatePrice(value: any, part: Part) {
    part.minimumPrice = value;
    this.clientService.updatePartInfo(part).subscribe();
  }
}
