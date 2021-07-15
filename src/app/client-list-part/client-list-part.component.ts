import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {Part} from "../part";

@Component({
  selector: 'app-client-list-part',
  templateUrl: './client-list-part.component.html',
  styleUrls: ['./client-list-part.component.css']
})
export class ClientListPartComponent implements OnInit {
partList : Part[]=[];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

  this.getPartListByModel(10);
  }

  public getPartListByModel( modelId: number){
    this.clientService.getAllPartByModelId(modelId).subscribe(result=>
    {
      this.partList=result;
      console.log(this.partList);
    });

  }

}
