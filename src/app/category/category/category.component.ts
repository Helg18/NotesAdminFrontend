import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import 'rxjs/Rx'; 


@Component({
  selector: 'hl-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[DataService]
})
export class CategoryComponent implements OnInit {
  public category;
  public categoria;
  public actualizandoCategoria;
	public actualizandoCategoriaId;
  public visible;

  constructor(private dataservice: DataService) {
    this.category = '';
  	this.categoria = '';
    this.visible = false;
  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.dataservice.categoryList().subscribe(
      (data)=> this.category = data
      );
  }

  eliminar(data){
    this.dataservice.categoryDelete(data).subscribe(
      (data) => alert(data.msg)
      );
    this.listar();
  }

  guardar(data){
    this.dataservice.categoryGuardar(data).subscribe(
        (data)=> alert(data.msg)
        );
    this.listar();
    this.categoria='';
  }

  formulario(data){
    this.visible=true;
    this.actualizandoCategoria=data.categoria;
    this.actualizandoCategoriaId=data.id;
  }

  actualizar(data){
    this.dataservice.categoryActualizar(data).subscribe(
      (data)=> alert(data.msg)
      );
    this.listar();
    this.visible=false;
  }

  cancelarActualizar(){
    this.visible=false;
  }

}
