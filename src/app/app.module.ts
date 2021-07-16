import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { ModelFilterComponent } from './model-filter/model-filter.component';
import { ClientListPartComponent } from './client-list-part/client-list-part.component';
import { ClientComponent } from './client/client.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { AdminComponent } from './admin/admin.component';
import { AdminBrandModelComponent } from './admin-brand-model/admin-brand-model.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelFilterComponent,
    ClientListPartComponent,
    ClientComponent,
    AdminComponent,
    AdminBrandModelComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
CommonModule,
    RouterModule.forRoot([
      {path: '', component: ClientComponent},
      {path: 'clientlistpart', component: ClientListPartComponent},
      {path: 'adminlistpart', component: AdminComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
