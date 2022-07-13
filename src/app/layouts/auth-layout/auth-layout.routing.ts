import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { CalculatorComponent } from '../../pages/calculator/calculator.component';
import { HotDealsComponent } from '../../pages/hot-deals/hot-deals.component';
import { VerifyEmailAddressComponent } from '../../pages/verify-email-address/verify-email-address.component';


export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'calculator',       component: CalculatorComponent },
    { path: 'hot-deals',       component: HotDealsComponent },
    { path: 'verify-email-address',       component: VerifyEmailAddressComponent }
];
