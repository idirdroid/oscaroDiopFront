import {Component, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {FormBuilder} from "@angular/forms";
import {AdminService} from "../admin.service";
import {Brand} from "../brand";

@Component({
  selector: 'app-admin-brand-model',
  templateUrl: './admin-brand-model.component.html',
  styleUrls: ['./admin-brand-model.component.css']
})
export class AdminBrandModelComponent implements OnInit {
  brandList: any;
  addBrandForm = this.formBuilder.group({
    formName: ''
  });


  constructor(private clientService: ClientService,
              private formBuilder: FormBuilder,
              private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.clientService.getAllBrand().subscribe(result => {
      this.brandList = result;
    })
  }

  brand: Brand = {  addDate: '2021-07-16',
    disable: true};

  addBrand() {
    this.brand.name = this.addBrandForm.get('formName')?.value;
    this.adminService.createBrand(this.brand);
    console.log(this.brand);

  }
}
