import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import 'rxjs/Rx';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule, MdCheckboxModule, MdToolbarModule } from '@angular/material';


const routes: Routes = [
  {
    path:'login',
    loadChildren: './../login/login.module#LoginModule'
  },
  {
    path:'register',
    loadChildren: './../register/register.module#RegisterModule'
  },
  {
    path:'category',
    loadChildren: './../category/category.module#CategoryModule'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdToolbarModule
  ],
  declarations: [
				ShellComponent, 
				TopBarComponent, 
				MainContentComponent
			],
  exports:[
  			ShellComponent
  		]
})
export class CoreModule { }
