import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
  public Login;
	public Register;
  public miToken;

  constructor( private http: Http) {
    this.Login = 'http://localhost:8000/api/login';
  	this.Register = 'http://localhost:8000/api/register';
  }

  loginme(data){
  	let headers = new Headers();
    let params = JSON.stringify({email: data.email, password: data.pass});

    headers.append('Content-Type', 'application/json')

    return this.http.post(this.Login, params, {headers: headers})
      .map(response => response.json()).subscribe(
      	(data)=> {
                    this.miToken = data.token,
                    alert("Inicio de secion exitosa")
                  }
      	);
  }

  //Registro
  registerMe(data){
    let headers = new Headers();
    let params = JSON.stringify({name: data.name, email: data.email, password: data.password});
    headers.append('Content-Type', 'application/json')

    return this.http.post(this.Register, params, {headers: headers})
      .map(response => response.json()).subscribe(
        (data)=> {
                   if (data.success) {
                     alert(data.msg),
                     alert("Por favor inicia sesion con tus nuevas credenciales")
                   }
                  }
        );
  }//End registerMe

}
