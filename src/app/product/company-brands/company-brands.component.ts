import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-brands',
  templateUrl: './company-brands.component.html',
  styleUrls: ['./company-brands.component.scss']
})
export class CompanyBrandsComponent implements OnInit {
  brands: any[] = [];

  ngOnInit(): void {
    this.brands = history.state.brands || [];
    console.log('Received brands:', this.brands);
  }
}
