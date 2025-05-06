import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/service/branch.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  productData: any[] = [];
  mainData: any;
  SubcategoryId: any;
  SubcategoryData: any;

  constructor(
    private api: BranchService,
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      // Fetch side thumbnails
      this.api.productId(this.productId).subscribe({
        next: (res: any) => {
          this.productData = Array.isArray(res) ? res : (res?.data || []);
          console.log('Product thumbnails:', this.productData);
        },
        error: (err) => {
          console.error('Error fetching product data:', err);
        }
      });

      // Fetch main product image and then subcategory data
      this.api.getMainproductData(this.productId).subscribe({
        next: (res: any) => {
          this.mainData = res;
          this.SubcategoryId = this.mainData?.subcategoryId?._id;
          console.log("SubcategoryId:", this.SubcategoryId);
          console.log('Main product data:', this.mainData);

          if (this.SubcategoryId) {
            this.api.getSubCatergoies(this.SubcategoryId).subscribe({
              next: (res: any) => {
                this.SubcategoryData = res;
                console.log("SubcategoryData:", this.SubcategoryData);
              },
              error: (err) => {
                console.error('Error fetching subcategory data:', err);
              }
            });
          }
        },
        error: (err) => {
          console.error('Error fetching main data:', err);
        }
      });
    }
  }
  isFavorite = false;

toggleFavorite(id:number) {
  this.isFavorite = !this.isFavorite;
}

view(id: number) {
  console.log('productId:', id);
  this.router.navigate(['/products/productDetails', id]);
}


}
