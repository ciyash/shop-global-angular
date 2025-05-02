import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductModule } from "./product/product.module";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
