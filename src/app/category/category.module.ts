import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule, MdButtonModule, MdCheckboxModule, MdToolbarModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdGridListModule } from '@angular/material';


const routes: Routes = [
  {
    path:'',
    component: CategoryComponent
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
    FormsModule,
    MdGridListModule
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
