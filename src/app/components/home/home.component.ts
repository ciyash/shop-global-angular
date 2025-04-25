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
  brands:any
  subcategories: any;
  categories: any;
  categoriesId: any;

  constructor(private api: BranchService, private router: Router) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getBrands() {
    this.api.CompanyBrands().subscribe({
      next: (res: any) => {
        if (res && Array.isArray(res)) {
          this.brands = res;
          this.router.navigate(['/products/brands'], { state: { brands: this.brands } });

        } else {
          console.warn('Unexpected response format:', res);
        }
      },
      error: (err) => {
        console.error('Failed to load brands:', err);
      }
    });
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
}

