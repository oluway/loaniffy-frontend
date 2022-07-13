import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { CalculatorComponent } from '../../pages/calculator/calculator.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HotDealsComponent } from '../../pages/hot-deals/hot-deals.component';
import { VerifyEmailAddressComponent } from 'src/app/pages/verify-email-address/verify-email-address.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgxSliderModule,
    ReactiveFormsModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    CalculatorComponent,
    HotDealsComponent,
    VerifyEmailAddressComponent

  ]
})
export class AuthLayoutModule { }
