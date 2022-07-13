import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoggedin?: boolean;
  loginForm!: FormGroup;

  socialUser!: SocialUser;


  constructor(private _fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {
    this.socialAuthService.authState.subscribe((user) => {
      this.router.navigate(['dashboard']);
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log("What is it ", this.socialUser);
    });
  }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })

  }
  login(){
     this.authService.SignIn(this.loginForm.value);
  }
  ngOnDestroy() {
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      if(res){
        this.router.navigate(['dashboard']);
      }
    });
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }

}
