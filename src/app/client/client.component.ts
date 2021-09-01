import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, OnChanges {
  printList: boolean = false;

  constructor() {
  }

  //declaration et initialisation du modelId;
  modelId: number = 0;

  //methode qui s'execute quand l'evenement arrive
  initModelId(modelIdEvent: number) {
    this.modelId = Number(modelIdEvent);
    console.log('Model ID: ' + this.modelId)
    if (this.modelId != 0) { //on affiche la liste dès qu'on recupére un model Id donc dès que Model est selectionné
      this.printList = true;
      console.log(this.printList);
    } else //Sinon la liste des pièces ne s'affiche pas
      this.printList = false;
  }


  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.printList)
    if (this.modelId != 0) {
      this.printList = true;
    }

  }

}
