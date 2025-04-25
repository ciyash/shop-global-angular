import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTopProductsComponent } from './company-top-products.component';

describe('CompanyTopProductsComponent', () => {
  let component: CompanyTopProductsComponent;
  let fixture: ComponentFixture<CompanyTopProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyTopProductsComponent]
    });
    fixture = TestBed.createComponent(CompanyTopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
