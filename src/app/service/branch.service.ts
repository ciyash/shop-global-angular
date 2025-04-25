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

  CompanyBrands(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/company/get');
  }

  GetCatergory(): Observable<any> {
    return this.http.get(this.AUTH_API + '/api/sub-category/get');
  }

  updateCategories(id: any) {
    return this.http.get(`${this.AUTH_API}/api/product/subcategoryId/${id}`);
  }

  Signup(userData: any) {
    return this.http.post(`${this.AUTH_API}/api/user/signup`, userData);
  }
  Login(value: any) {
    return this.http.post(`${this.AUTH_API}/api/user/login`, value);
  }
}
