import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {Part} from "../part";

@Component({
  selector: 'app-client-list-part',
  templateUrl: './client-list-part.component.html',
  styleUrls: ['./client-list-part.component.css']
})
export class ClientListPartComponent implements OnInit {
  partList: Part[] = [];

  constructor(private clientService: ClientService) {
  }

  @Input() modelId=0;

  ngOnInit(): void {

    this.getPartListByModel(this.modelId);
  }



  public getPartListByModel(modelId: number) {
    this.clientService.getAllPartByModelId(modelId).subscribe(result => {
      this.partList = result;
      console.log(this.partList);
    });

  }

}
