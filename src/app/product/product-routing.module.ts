// product-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CompanyBrandsComponent } from './company-brands/company-brands.component';
import { CompanyTopProductsComponent } from './company-top-products/company-top-products.component';
import { DealsComponent } from './deals/deals.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component'; 





const routes: Routes = [
  { path: 'categories/:id', component: CategoriesComponent },
  // { path: 'brands', component: CompanyBrandsComponent },
  { path: 'brands', component: CompanyBrandsComponent },
  { path: 'topbrands/:id', component: CompanyTopProductsComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'home', component: HomeComponent }, // ✅ Add this
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'howitwork', component: HowItWorkComponent },
  





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
