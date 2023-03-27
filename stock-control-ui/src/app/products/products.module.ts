import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products/products.component';
import {TableModule} from "primeng/table";
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../shared/shared.module";
import { ProdFormComponent } from './prod-form/prod-form.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProdFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TableModule,
    AppMaterialModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class ProductsModule {
}
