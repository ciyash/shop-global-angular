import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/service/branch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-top-products',
  templateUrl: './company-top-products.component.html',
  styleUrls: ['./company-top-products.component.scss']
})
export class CompanyTopProductsComponent implements OnInit {
  brandId: any;
  cdata: any[] = [];

  constructor(private api: BranchService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.brandId = params.get('id');
      console.log('Received ID (via subscription):', this.brandId);
      if (this.brandId) {
        this.getTopDealsForBrand();
      }
    });
  }
  getTopDealsForBrand() {
    this.api.companyTopdeals(this.brandId).subscribe({
      next: (response: any) => {
        console.log('Top brands received:', response);
        this.cdata = response;
      },
      error: (error) => {
        console.error('Error fetching top deals:', error);
      }
    });
  }


}
