// import { Component, OnInit } from '@angular/core';
// import { BranchService } from 'src/app/service/branch.service';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-categories',
//   templateUrl: './categories.component.html',
//   styleUrls: ['./categories.component.scss']
// })
// export class CategoriesComponent implements OnInit {
//   categoryId: any;
//   cdata: any[] = [];
//   companyBrandsData: any;
//   constructor(private api: BranchService, private route: ActivatedRoute,private router:Router) {}
//   ngOnInit() {
//     this.route.paramMap.subscribe(params => {
//       this.categoryId = params.get('id');
//       console.log('Received ID (via subscription):', this.categoryId);
//       if (this.categoryId) {
//         this.updateCategories();
//       } else {
//         this.companyBrands();
//       }
      
//     });
//   }

//   updateCategories() {
//     this.api.updateCategories(this.categoryId).subscribe({
//       next: (response: any) => {
//         console.log('Subcategories received:', response);
//         this.cdata = response;
//       },
//       error: (error) => {
//         console.error('Error fetching subcategories:', error);
//       }
//     });
//   }

//     view(id: number) {
//       console.log("productid:",id);
//       this.router.navigate(['/products/productDetails', id]);
//     }
    
//     companyBrands() {
//       this.api.GetCompanyID(this.categoryId).subscribe({
//         next: (res: any) => {
//           this.cdata = res;
//           console.log("GetCompanyData:", this.cdata);
//         },
//         error: (error) => {
//           console.error('Error fetching subcategories:', error);
//         }
//       });
//     }
    

// }


import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/service/branch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryId: any;
  cdata: any[] = [];

  constructor(
    private api: BranchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      console.log('Received ID (via subscription):', this.categoryId);
        this.updateCategories();
        this.companyBrands();
    
    });
  }

  updateCategories() {
    this.api.updateCategories(this.categoryId).subscribe({
      next: (response: any) => {
        console.log('Subcategories received:', response);
        this.cdata = response;
      },
      error: (error) => {
        console.error('Error fetching subcategories:', error);
      }
    });
  }

  companyBrands() {
    this.api.GetCompanyID(this.categoryId).subscribe({
      next: (res: any) => {
        this.cdata = res;
        console.log('GetCompanyData:', this.cdata);
      },
      error: (error) => {
        console.error('Error fetching company brands:', error);
      }
    });
  }

  view(id: number) {
    console.log('productId:', id);
    this.router.navigate(['/products/productDetails', id]);
  }
}

