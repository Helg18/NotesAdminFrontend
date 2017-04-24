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

  constructor(private dataservice: DataService) {
  	this.category = '';
  }

  ngOnInit() {
  	this.dataservice.categoryList().subscribe(
      (data)=> this.category = data
      );
  }

  eliminar(data){
    this.dataservice.categoryDelete(data).subscribe(
      (data) => alert(data.msg)
      );
  }

}
