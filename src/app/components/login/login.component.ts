import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from 'src/app/service/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form:FormGroup
  loginData: any;
  constructor(private fb: FormBuilder, private api: BranchService,private router:Router) {
    this.form=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
    })
  }

  login() {
    const payload = this.form.value;
    console.log("payload:", payload);
  
    this.api.Login(payload).subscribe(
      (response) => {
        console.log('login successful', response);
        this.router.navigate(['/home']); 
      },
      (error) => {
        console.error('Login error', error);
      }
    );
  }
  
}
