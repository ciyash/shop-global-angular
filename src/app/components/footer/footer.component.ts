import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router:Router){}

  getcontact(){
    this.router.navigate(['/products/contactus'])

  }
  getabout(){
    this.router.navigate(['/products/aboutus'])

  }

}
