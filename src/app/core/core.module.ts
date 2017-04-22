import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule, MdCheckboxModule, MdToolbarModule } from '@angular/material';


const routes: Routes = [
  {
    path:''
  },
  {
    path:'login',
    loadChildren: ''
  },
  {
    path:'register',
    loadChildren: ''
  },
  {
    path:'categorias',
    loadChildren: ''
  },
  {
    path:'notas',
    loadChildren: ''
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
