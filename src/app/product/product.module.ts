import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CompanyBrandsComponent } from './company-brands/company-brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { CompanyTopProductsComponent } from './company-top-products/company-top-products.component';
import { DealsComponent } from './deals/deals.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';


@NgModule({
  declarations: [
    ProductComponent,
    CompanyBrandsComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    CompanyTopProductsComponent,
    DealsComponent,
    HeaderComponent,
    ProductDetailsComponent,
    HowItWorkComponent,
  ],
    exports: [HeaderComponent, FooterComponent],
 
  
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
