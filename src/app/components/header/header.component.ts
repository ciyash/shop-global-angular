import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/service/branch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cdata: any;
  menuOpen = false;
  dropdownOpen = false;
  toggleNavbar = false;
  activeSection = 'popular-fashion';
  productData: any[] = [];
  catergotyid: any;

  constructor(private router: Router, private api: BranchService) {}

  ngOnInit(): void {
    this.Getcatertories();
  }
  gethome() {
    this.router.navigate(['/products/home']);
  }

  Getcatertories() {
    this.api.Getcatergories().subscribe({
      next: (res: any) => {
        this.cdata = res;
        console.log("cdata:", this.cdata);
  
        // Automatically load first category's data
        if (this.cdata && this.cdata.length > 0) {
          this.OnSelectCatbySubcat(this.cdata[0]._id);
        }
      }
    });
  } 


  OnSelectCatbySubcat(id: any) {
    this.api.filterBrands(id).subscribe(
      (res1: any) => {
        console.log('pda',res1);
        this.productData = res1;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  


  GetfilterProducts() {
    this.api.filterBrands(this.catergotyid).subscribe({
      next: (res: any) => {
        this.productData = res || {}; // Prevent productData from being null
        console.log("productdata:", this.productData);
      }
    });
  }
  
  getId(categoryId: any) {
    console.log('Clicked ID:', categoryId);
    this.router.navigate(['/products/categories', categoryId]);
  
  }



  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

 






}