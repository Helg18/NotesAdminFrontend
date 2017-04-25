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
  public mostrar_crear;
  public mostrar_actualizar;
  public actualizandoNotaId;
  public actualizandoNote;
  public actualizandoCategoria;
  public actualizandoTitle;
  public actualizandoStatus;
  public checkedono;
  public orderbyName;
  public orderedBy;

  constructor(private dataservice: DataService) {
    this.title="";
    this.note="";
    this.mostrar_crear = false;
    this.mostrar_actualizar = false;
    this.checkedono =  [ {value: '0', viewValue: 'Pendiente'}, {value: '1', viewValue: 'Completo'} ];
    this.orderbyName = false;
    this.orderedBy = 'A-Z';

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

  eliminar(data){
    this.dataservice.noteDelete(data).subscribe(
      (data) => alert(data.msg)
      );
    this.listar();
  }

  mostrarformcrear(){
    if (this.mostrar_crear) { this.mostrar_crear = false; } 
    else { this.mostrar_crear = true; }
  }

  mostrarformactualizar(data){  
    if (!this.mostrar_actualizar) { this.mostrar_actualizar = true; }
    this.actualizandoNotaId    = data.id;
    this.actualizandoCategoria = data.category_id;
    this.actualizandoTitle     = data.title;
    this.actualizandoNote      = data.note;
    this.actualizandoStatus    = data.status;
  }

  actualizar(data){
    this.dataservice.noteActualizar(data).subscribe(
      (data) => alert(data.msg)
      );
    this.listar();
  }

  orderNotes(){
    if (this.orderbyName) { this.orderbyName = false; this.orderedBy = "Z-A";}
    else { this.orderbyName = true; this.orderedBy = "A-Z"; }
  }

}
