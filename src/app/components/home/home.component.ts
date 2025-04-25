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
  brands:any
  subcategories: any;
  categories: any;
  categoriesId: any;
  brandss: any;

  constructor(private api: BranchService, private router: Router) {}

  ngOnInit(): void {
    this.getCategory();
    this.getCompanyBrandsOnly(); 

  }
  getCompanyBrandsOnly() {
    this.api.CompanyBrands().subscribe({
      next: (res: any) => {
        if (res && Array.isArray(res)) {
          this.brands = res;
          console.log('Initial load brands:', this.brands);
        }
      },
      error: (err) => {
        console.error('Failed to load brands:', err);
      }
    });
  }

  Getbrands() {
    this.router.navigate(['/products/brands'], {
      state: { brands: this.brands }
    });
  }

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

}

