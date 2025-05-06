import { BranchService } from 'src/app/service/branch.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent {
  CompanyBrand: any;
  shippingData: any;
  Topcompany: any;
  exclusive: any;
  cdata:any;
  constructor(private api:BranchService, private router:Router){}
  @ViewChild('brandScrollable', { static: false }) brandScrollable!: ElementRef;
  @ViewChild('dealsScrollable', { static: false }) dealsScrollable!: ElementRef;
  @ViewChild('ExclusivesScrollable', { static: false }) ExclusivesScrollable!: ElementRef;



  ngOnInit(): void {
    this.GetShipingData();
    this.ToCompanyDeals();
    this.GetExclusive();
    this.GetCompanyBrands(); // load brands

  }
  ToCompanyDeals(){
    this.api.GetTopCompany().subscribe({
      next:(res:any)=>{
        this.Topcompany=res;
        console.log("topCompany:",this.Topcompany);
      }
    })
  }

// all company brands
visibleBrands: any[] = [];
showAllBrands = false;
brandsPerRow = 6; // assuming 6 items per row
rowsToShow = 3; // show only 3 rows initially


GetCompanyBrands() {
  this.api.allStore().subscribe({
    next: (res: any[]) => {
      this.CompanyBrand = res;
      this.updateVisibleBrands();
    },
    error: (err) => {
      console.error('Error loading brands', err);
    }
  });
}

updateVisibleBrands() {
  if (this.showAllBrands) {
    this.visibleBrands = this.CompanyBrand;
  } else {
    const itemsToShow = this.brandsPerRow * this.rowsToShow;
    this.visibleBrands = this.CompanyBrand.slice(0, itemsToShow);
  }
}

toggleBrands() {
  this.showAllBrands = true;
  this.updateVisibleBrands();
}




Getcatertories() {
  this.api.Getcatergories().subscribe({
    next: (res: any) => {
      this.cdata = res;
      console.log("cdata:", this.cdata);
    }
  });
}

getId(categoryId: any) {
  console.log('Clicked ID:', categoryId);
  this.router.navigate(['/products/categories', categoryId]);

}
  
  GetShipingData(){
    this.api.GetFreeShipping().subscribe({
      next: (res: any) => {
        this.shippingData=res;
        console.log("shippingData:",this.shippingData);
      }
      })
      }


      GetExclusive(): void {
        this.api.exclusive().subscribe({
          next: (res: any) => {
            this.exclusive = res;
            console.log('Exclusive data:', this.exclusive);
          },
          error: (err) => {
            console.error('Error fetching exclusive data:', err);
          }
        });
      }


    scrollBrandsLeft() {
    this.brandScrollable.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollBrandsRight() {
    this.brandScrollable.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }

  scrollDealsLeft() {
    this.dealsScrollable.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollDealsRight() {
    this.dealsScrollable.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }


  scrollEXLeft() {
    this.ExclusivesScrollable.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollEXRight() {
    this.ExclusivesScrollable.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }


  

}
