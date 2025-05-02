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
  productData: any;
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
      }
    });
  }


  setCategory(id: any): void {

    console.log("Category ID:", id);
    this.catergotyid=id
    this.GetfilterProducts();

  }
  


  GetfilterProducts() {
    this.api.filterBrands(this.catergotyid).subscribe({
      next: (res: any) => {
        this.productData = res || {}; // Prevent productData from being null
        console.log("productdata:", this.productData);
      }
    });
  }
  




  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

 






}