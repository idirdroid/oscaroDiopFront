import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  printList : boolean = true;
  constructor() { }

  //declaration et initialisation;
    modelId:number = 0;

  //methode qui s'execute quand l'evenement arrive
  initModelId(modelIdEvent: number){
    this.modelId=Number(modelIdEvent);
    console.log('Model ID: ' + this.modelId)
  }


  ngOnInit(): void {

  }

}
