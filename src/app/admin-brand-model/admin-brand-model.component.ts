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
    id: 0,
    name: ''
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

  brand: any;

  addBrand() {
    this.brand = this.addBrandForm.value;
    this.brand.addDate = new Date();
    console.log(this.brand.addDate);
    this.adminService.createBrand(this.brand).subscribe(() => {
      this.clientService.getAllBrand().subscribe(result => {
        this.brandList = result;
      })

    });
  }

  disableBrand(brand: Brand) {
    brand.disable = true;
    this.clientService.disableBrand(brand).subscribe();
    //let button = document.getElementById('btn_'+ brand.id);
    // @ts-ignore
    //button.className = "btn btn-disable mb-2"
  }

  enableBrand(brand: Brand) {
    brand.disable = false;
    this.clientService.disableBrand(brand).subscribe();

  }
}
