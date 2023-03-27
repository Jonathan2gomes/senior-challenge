import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {ProdFormComponent} from "./prod-form/prod-form.component";

const routes: Routes = [
  {path: '', component: ProductsComponent},
  // {path: 'new', prodFormComponent: ProdFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
