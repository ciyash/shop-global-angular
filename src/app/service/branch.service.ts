import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  private readonly AUTH_API = 'https://shop-global-backend.onrender.com';

  constructor(private http: HttpClient, private router: Router) {}

  // Company
allStore(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/company/get');
}
  TrendingCompany(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/company/trending');
  }
  companyTopdeals(id:any){
    return this.http.get(`${this.AUTH_API}/api/product/companyId/${id}`);
  }

  // product
  Getproduct(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/product/top-deals');
  }
  todealsProduct(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/product/top-deals');
  }

// catergories
  GetCatergory(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/sub-category/get');
  }
  updateCategories(id: any) {
    return this.http.get(`${this.AUTH_API}/api/product/subcategoryId/${id}`);
  }


  // logo
  Getlogs(): Observable<any> {
      return this.http.get(this.AUTH_API + '/api/logo');
    }
  // catergorires
  Getcatergories(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/category/get');
  }
// 
  Signup(userData: any) {
    return this.http.post(`${this.AUTH_API}/api/user/signup`, userData);
  }
  Login(value: any) {
    return this.http.post(`${this.AUTH_API}/api/user/login`, value);
  }

  FeedBack(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/feedback/get');

  }

  address(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/address');

  }
}
