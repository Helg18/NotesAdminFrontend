import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule, MdButtonModule, MdCheckboxModule, MdToolbarModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
