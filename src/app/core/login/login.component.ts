import { Component} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private toast: MatSnackBar,
    private authService: AuthService,
) {}
  login() {
    this.authService.login(this.credentials)
      .then( user => this.router.navigate(['/dashboard']))
      .catch( error => this.toast.open(error.message));

  }


}

