import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../client.service";
import {Brand} from "../brand";
import {Model} from "../model";
import {Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-model-filter',
  templateUrl: './model-filter.component.html',
  styleUrls: ['./model-filter.component.css']
})
export class ModelFilterComponent implements OnInit {
//decalaration d'un Output qui gére les événements (Emission d'évenements vers le parent)
  @Output() newModelIdEvent = new EventEmitter<number>();

  //la valeur qui va etre transmise (emettre) vers Parent par "$event"
  selectedModelId(value: string) {
    this.newModelIdEvent.emit(Number(value));
  }

  constructor(private formBuilder: FormBuilder, private clientService: ClientService) {
  }

  filterForm = this.formBuilder.group({
    brandSelect: 0, //la value  de l'option du formulaire
    modelSelect: 0
  })

  brandList: Brand[] = [];
  modelList: Model[] = [];


  ngOnInit(): void {

    this.clientService.getAllBrand().subscribe(result => {
      this.brandList = result;
    });
  }


//cette fonction génère la liste des modéles à partir de la Marque sélectionnée
  onBrandChange() {
    if (this.filterForm.get('brandSelect')?.value != 0) {
      this.clientService.getModelByBrand(this.filterForm.get('brandSelect')?.value).subscribe(result => {
        this.modelList = result;
      });

      //on initialise la value du model select à 0
      //on passe la valeur du modelId par défaut qui est "0" (this.filterForm.get('modelSelect')?.value) au parent

      this.newModelIdEvent.emit(Number(this.filterForm.get('modelSelect')?.value));
      console.log("Valeur du modeleId : "+ this.filterForm.get('modelSelect')?.value)
    }

  }
}
