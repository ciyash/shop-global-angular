import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBrandsComponent } from './company-brands.component';

describe('CompanyBrandsComponent', () => {
  let component: CompanyBrandsComponent;
  let fixture: ComponentFixture<CompanyBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyBrandsComponent]
    });
    fixture = TestBed.createComponent(CompanyBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
