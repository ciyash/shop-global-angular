import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-brands',
  templateUrl: './company-brands.component.html',
  styleUrls: ['./company-brands.component.scss']
})
export class CompanyBrandsComponent implements OnInit {
  brands: any[] = []; // Define brands as an array

  constructor(private router: Router) {}

  ngOnInit() {
    // Check for state data from navigation
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['brands']) {
      this.brands = navigation.extras.state['brands'];
      console.log('Brands data:', this.brands);
    } else {
      // Fallback: Check window.history.state if navigation is complete
      const historyState = window.history.state;
      if (historyState?.brands) {
        this.brands = historyState.brands;
        console.log('Brands from history:', this.brands);
      }
    }
  }
}