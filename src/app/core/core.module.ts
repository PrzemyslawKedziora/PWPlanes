import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ]
})
export class CoreModule { }
