import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/service/branch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollable', { static: false }) scrollable!: ElementRef;
  @ViewChild('brandScrollable', { static: false }) brandScrollable!: ElementRef;
  @ViewChild('topScrollable', { static: false }) topScrollable!: ElementRef;
  @ViewChild('productScrollable', { static: false }) productScrollable!: ElementRef;
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  product:any;
  brands:any
  subcategories: any;
  categories: any;
  categoriesId: any;
  brandss: any;
  logs: any;
  data: any ;
  Tbrands: any;
  TCompany: any;
  allCompanyBrands: any;
  CompanyBrand: any;
  feedbackdata!: any[];


  constructor(private api: BranchService, private router: Router) {}

  ngOnInit(): void {
    this.getCategory();
    this.TopDealsProduct();
    this.getlogo();
    this.productTreanding();
    this.allCompany();
    this.CompanyTrending();
    this.feebback();
  }



  // all Store 
  allCompany(){
    this.api.allStore().subscribe({
      next: (res: any) => {
        if (res && Array.isArray(res)) {
          this.CompanyBrand = res;
          console.log('allcompanys:', this.CompanyBrand);
        }}
      })
  }

  listStores(){
    this.router.navigate(['/products/brands'], {
      state: { CompanyBrand: this.CompanyBrand }
    });
  }
  
  // To Deals product
  TopDealsProduct() {
    this.api.todealsProduct().subscribe({
      next: (res: any) => {
        if (res && Array.isArray(res)) {
          this.brands = res;
          console.log('trending  brands:', this.brands);
        }
      },
      error: (err) => {
        console.error('Failed to load brands:', err);
      }
    });
  }

  // Getbrands() {
  //   this.router.navigate(['/products/brands'], {
  //     state: { brands: this.brands }
  //   });
  // }

TopBrandsid(brandId: any) {
  console.log('Clicked ID:', brandId);
  this.router.navigate(['/products/topbrands', brandId]);
}

  getCategory() {
    this.api.GetCatergory().subscribe({
      next: (response: any) => {
        this.categories = response;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
}

getId(categoryId: any) {
  console.log('Clicked ID:', categoryId);
  this.router.navigate(['/products/categories', categoryId]);

}
getlogo(){
  this.api.Getlogs().subscribe({
    next:(res:any)=>{
      this.data=res.logos
      console.log("logos:",this.data);
    }
  })
}
// product trending
productTreanding(){
  this.api.Getproduct().subscribe({
    next:(res:any)=>{
      this.product=res;
      console.log("product:",this.product);
      
    }
  })
}
  CompanyTrending(){
    this.api.TrendingCompany().subscribe({
      next:(res:any)=>{
        this.TCompany=res;
        console.log("TCompany:",this.TCompany);
        
      }
    })
  }
  
feebback(){
  this.api.FeedBack().subscribe({
    next:(res:any)=>{
      this.feedbackdata=res
      console.log("feedback:",this.feedbackdata);
      
    }
  })
}


scrollLeft() {
  this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
}

scrollRight() {
  this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });

}


  scrollCategoriesLeft() {
    this.scrollable.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollCategoriesRight() {
    this.scrollable.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }

  scrollBrandsLeft() {
    this.brandScrollable.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollBrandsRight() {
    this.brandScrollable.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }

  scrollBrandLeft() {
    this.topScrollable.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollBrandRight() {
    this.topScrollable.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }

// trending
scrollProductsLeft() {
  this.productScrollable.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollProductsRight() {
  this.productScrollable.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}

@ViewChild('reviewScrollable') reviewScrollable!: ElementRef;

scrollReviewLeft() {
  this.reviewScrollable.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollReviewRight() {
  this.reviewScrollable.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}



}

