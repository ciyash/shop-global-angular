import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/service/branch.service';

@Component({
  selector: 'app-company-brands',
  templateUrl: './company-brands.component.html',
  styleUrls: ['./company-brands.component.scss']
})
export class CompanyBrandsComponent implements OnInit {
  CompanyBrand: any[] = []; // Define brands as an array
  cdata:any;
  Adata: any;

  constructor(private router: Router,private api:BranchService) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['CompanyBrand']) {
      this.CompanyBrand = navigation.extras.state['CompanyBrand'];
      console.log('Received Brands data from navigation:', this.CompanyBrand);
    } else {
      const historyState = window.history.state;
      if (historyState?.CompanyBrand) {
        this.CompanyBrand = historyState.CompanyBrand;
        console.log('Received Brands data from history:', this.CompanyBrand);
      }
    }
    this.Getcatertories();
    this.getaddress();
  }

Getcatertories(){
  this.api.Getcatergories().subscribe({
    next:(res:any)=>{
      this.cdata=res;
      console.log("cdata:",this.cdata);

    }
  })
}


getaddress(){
  this.api.address().subscribe({
    next:(res:any)=>{
      this.Adata=res.data;
      console.log("Adata:",this.Adata);
    }
})}



copyAddress() {
  const address = `${this.Adata[0].houseNo} ${this.Adata[0].address}, ${this.Adata[0].city}, ${this.Adata[0].pincode}`;
  
  // Create a textarea element to copy the text
  const textarea = document.createElement('textarea');
  textarea.value = address;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  alert('Address copied to clipboard!');
}

}