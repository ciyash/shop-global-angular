import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/service/branch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryId: any;
  cdata: any[] = [];
  constructor(private api: BranchService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      console.log('Received ID (via subscription):', this.categoryId);
      if (this.categoryId) {
        this.updateCategories();
      }
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
}
