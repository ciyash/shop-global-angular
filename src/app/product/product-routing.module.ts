// product-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CompanyBrandsComponent } from './company-brands/company-brands.component';
import { CompanyTopProductsComponent } from './company-top-products/company-top-products.component';
import { DealsComponent } from './deals/deals.component';

const routes: Routes = [
  { path: 'categories/:id', component: CategoriesComponent },
  // { path: 'brands', component: CompanyBrandsComponent },
  { path: 'brands', component: CompanyBrandsComponent },
  { path: 'topbrands/:id', component: CompanyTopProductsComponent },
  { path: 'deals', component: DealsComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
