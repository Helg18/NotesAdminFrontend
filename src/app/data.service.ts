import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
	public Login;

  constructor( private http: Http) {
  	this.Login = 'http://localhost:8000/api/login';
  }

  loginme(data){
  	let headers = new Headers();
    let params = JSON.stringify({email: data.email, password: data.pass});

    headers.append('Content-Type', 'application/json')

    return this.http.post(this.Login, params, {headers: headers})
      .map(response => response.json()).subscribe(
      	(data)=> console.log(data.token)
      	);
  }

}
