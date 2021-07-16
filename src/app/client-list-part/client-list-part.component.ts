import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ClientService} from "../client.service";
import {Part} from "../part";
import {FormBuilder} from "@angular/forms";
import {PartGroup} from "../partGroup";
import {PartType} from "../partType";


@Component({
  selector: 'app-client-list-part',
  templateUrl: './client-list-part.component.html',
  styleUrls: ['./client-list-part.component.css']
})
export class ClientListPartComponent implements OnChanges, OnInit {
  partList: Part[] = [];

  partGroupList: PartGroup[] = [];
  partTypeList: PartType[] = [];

  constructor(private clientService: ClientService,
              private formBuilder: FormBuilder) {
  }

  @Input() modelId: number = 0;

  ngOnInit(): void {
    this.clientService.getAllGroupPart().subscribe(result => {
      this.partGroupList = result;
      console.log(result);
  });
  }

  filterPartForm=this.formBuilder.group({
    groupPartSelect:0,
    typePartSelect:0
  });

  //Déclanchée lors d'un changement sur le composant (attributs / Input)


  ngOnChanges() {
    if(this.modelId!=0) {
      this.getPartListByModel(this.modelId);
      console.log("je rentre dans les parts");
    }
    if(this.filterPartForm.get('typePartSelect')?.value != 0 && this.modelId!=0){
      this.getPartListByModelByPartType(this.modelId, this.filterPartForm.get('typePartSelect')?.value);
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
    console.log('Id du group Part: ' + this.filterPartForm.get('groupPartSelect')?.value)
   this.clientService.getAllTypePartByGroupId(this.filterPartForm.get('groupPartSelect')?.value).subscribe(result =>
   {
     this.partTypeList = result;
     console.log(result);
     console.log(this.partTypeList)
   });
    //Mettre à jour le tableau
  }

  OnTypePartChange() {
    //Mise à jour du tableau de pièces
    console.log( this.filterPartForm.get('typePartSelect')?.value)
    this.clientService.getPartListByModelByPartType(this.modelId, this.filterPartForm.get('typePartSelect')?.value).subscribe(result => {
      this.partList = result;
    });
  }

  getPartListByModelByPartType(modelId: number, partTypeId: number) {
    this.clientService.getPartListByModelByPartType(modelId, partTypeId).subscribe(result => {
      this.partList = result;
    })

  }

}
