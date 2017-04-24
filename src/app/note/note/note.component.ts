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

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  	this.listar();
  }

  listar(){
  	this.dataservice.noteListar().subscribe(
  		(data) => this.notas = data
  		);
  }

}
