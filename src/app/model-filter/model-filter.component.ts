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

  @Output() newModelIdEvent = new EventEmitter<number>();

  selectedModelId(value: string) {
    this.newModelIdEvent.emit(Number(value));
  }

  constructor(private formBuilder: FormBuilder, private clientService: ClientService) {
  }

  filterForm = this.formBuilder.group({
    brandSelect: '',
    modelSelect: ''
  })

  brandList: Brand[] = [];
  modelList: Model[] = [];


  ngOnInit(): void {

    this.clientService.getAllBrand().subscribe(result => {
      this.brandList = result;
    });
  }

  onBrandChange() {
    this.clientService.getModelByBrand(this.filterForm.get('brandSelect')?.value).subscribe(result => {
      this.modelList = result;
    });
    console.log(this.filterForm.get('brandSelect')?.value)
  }
}
