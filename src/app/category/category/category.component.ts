import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';


@Component({
  selector: 'hl-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[DataService]
})
export class CategoryComponent implements OnInit {
  public category;
	public categoria;

  constructor(private dataservice: DataService) {
    this.category = '';
  	this.categoria = '';
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
    this.dataservice.categoriaGuardar(data).subscribe(
        (data)=> {
                     alert(data.msg)
                  }
        );
    this.listar();
    this.categoria='';
  }

}
