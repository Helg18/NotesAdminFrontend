import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'hl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DataService]
})
export class RegisterComponent implements OnInit {
	protected name;
	protected email;
	protected password;

  constructor( private dataservice: DataService) { 
  	this.name ='';
	this.email ='';
	this.password ='';
  }

  ngOnInit() {
  }

  //registro de nuevo usuario
  registro(data) {
    this.dataservice.registerMe(data);
  }

}
