import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent{
  [x: string]: any;
  credentials={
    email: '',
    password: '',
    password1: ''
  }



  constructor(
  private router: Router,
  private toast: MatSnackBar,
  private authService: AuthService

  ) {}


  register() {
    this.authService.register(this.credentials)
      .then(user => this.toast.open('Account created, please log in!', '', {panelClass: 'toast-success'}))
      .catch(error => this.toast.open(error.message, '', {panelClass: 'toast-error'}));
  }

}
