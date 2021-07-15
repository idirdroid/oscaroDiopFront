import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ClientService} from "../client.service";
import {Part} from "../part";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-client-list-part',
  templateUrl: './client-list-part.component.html',
  styleUrls: ['./client-list-part.component.css']
})
export class ClientListPartComponent implements OnChanges, OnInit {
  partList: Part[] = [];

  constructor(private clientService: ClientService, private formBuilder: FormBuilder) {
  }

  @Input() modelId: number = 0;

  ngOnInit(): void {
    //this.getPartListByModel(this.modelId);
  }

  filterPartForm=this.formBuilder.group({
    groupPartSelect:0,
    typePartSelect:0
  });

  //Déclanchée lors d'un changement sur le composant (attributs / Input)
  partGroupList: any;
  partTypeList: any;

  ngOnChanges() {
    if(this.modelId!=0) {
      this.getPartListByModel(this.modelId);
      console.log("je rentre dans les parts");
    }
  }

  public getPartListByModel(modelId: number) {
    console.log('Le modèle Id Passé en paramètre: ' + modelId)
    this.clientService.getAllPartByModelId(modelId).subscribe(result => {
      this.partList = result;

      console.log(this.partList);
    });
  }

  onGroupPartChange() {
   this.clientService.getAllTypePartByGroupId(this.filterPartForm.get("groupPartSelect")?.value).subscribe(result =>
   {
     this.partGroupList = result;
     console.log("coucou encore :" + result);
   });
  }

  OnTypePartChange() {

  }
}
