import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this._fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    policy: ["", Validators.required]
  })
  constructor(private _fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }
  register(){
     this.authService.SignUp(this.registerForm.value)
     console.log("Values ... ", this.registerForm.value)
  }
}
