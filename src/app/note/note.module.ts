import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule, MdButtonModule, MdCheckboxModule, MdToolbarModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdGridListModule, MdSelectModule } from '@angular/material';


const routes: Routes = [
  {
    path:'',
    component: NoteComponent
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
    MdGridListModule,
    MdSelectModule
  ],
  declarations: [NoteComponent]
})
export class NoteModule { }
