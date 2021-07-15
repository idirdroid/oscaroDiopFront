import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ClientService} from "../client.service";
import {Part} from "../part";


@Component({
  selector: 'app-client-list-part',
  templateUrl: './client-list-part.component.html',
  styleUrls: ['./client-list-part.component.css']
})
export class ClientListPartComponent implements OnChanges, OnInit {
  partList: Part[] = [];

  constructor(private clientService: ClientService) {
  }

  @Input() modelId: number = 0;

  ngOnInit(): void {
    //this.getPartListByModel(this.modelId);
  }

  //Déclanchée lors d'un changement sur le composant (attributs / Input)
  ngOnChanges() {
    this.getPartListByModel(this.modelId);
  }

  public getPartListByModel(modelId: number) {
    console.log('Le modèle Id Passé en paramètre: ' + modelId)
    this.clientService.getAllPartByModelId(modelId).subscribe(result => {
      this.partList = result;

      console.log(this.partList);
    });

  }

}
