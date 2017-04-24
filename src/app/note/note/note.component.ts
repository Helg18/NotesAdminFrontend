import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import 'rxjs/Rx';

@Component({
  selector: 'hl-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [DataService]
})
export class NoteComponent implements OnInit {
	public notas;
  public categorias;
  public categoria;
  public title;
  public note;

  constructor(private dataservice: DataService) {
    this.title="";
    this.note="";
  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.dataservice.noteListar().subscribe(
      (data) => this.notas = data
      );
    this.listarCats();
  }

  listarCats(){
    this.dataservice.categoryList().subscribe(
      (data) => {this.categorias = data}
      );
  }

  borrarCampos(){
    this.title="";
    this.note="";
  }

  guardar(data){
    this.dataservice.noteGuardar(data).subscribe(
      (data) =>  alert(data.msg)
      );
    this.borrarCampos();
  	this.listar();
  }

}
