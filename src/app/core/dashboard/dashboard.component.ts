import { Component} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  user = this.authService.user;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: MatSnackBar
  ) { }
  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
    this.toast.open('User has been succesfully logged out!', '', {panelClass: 'toast-success'})
  }

}
