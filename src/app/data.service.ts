import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
  public Login;
  public Register;
  public Category;
	public Note;
  public miToken;

  constructor( private http: Http) {
    this.Login = 'http://localhost:8000/api/login';
    this.Register = 'http://localhost:8000/api/register';
    this.Category = 'http://localhost:8000/api/category';
  	this.Note = 'http://localhost:8000/api/note';
    this.miToken = '';
  }

  loginme(data){
  	let headers = new Headers();
    let params = JSON.stringify({email: data.email, password: data.pass});

    headers.append('Content-Type', 'application/json')

    return this.http.post(this.Login, params, {headers: headers})
      .map(response => response.json()).subscribe(
      	(data)=> {
                    window.sessionStorage.setItem('miToken', data.token),
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




  /**
   * Categorias
   */
  //Listar categorias
  categoryList(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  'Bearer ' + window.sessionStorage.getItem('miToken'))
    
    return this.http.get(this.Category, {headers: headers})
      .map(response => response.json());
  }//end categoryList

  //Eliminar categorias
  categoryDelete(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  'Bearer ' + window.sessionStorage.getItem('miToken'))

    return this.http.delete(this.Category+'/'+data, {headers: headers} )
      .map( response => response.json() );
  }//End categoryDelete

  //guardar categoria
  categoryGuardar(data){
    let headers = new Headers();
    let params = JSON.stringify({category: data.categoria});
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('miToken'))

    return this.http.post(this.Category, params, {headers: headers})
      .map(response => response.json());
  }//end categoriaGuardar

  categoryActualizar(data){
    let headers = new Headers();
    let params = JSON.stringify({category: data.actualizandoCategoria, id: data.actualizandoCategoriaId});
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('miToken'))

    return this.http.put(this.Category+'/'+data.actualizandoCategoriaId, params, {headers: headers})
      .map(response=>response.json());
  }// end categoryActualizar



  /**
   * Notas
   */
  //listar Notas
  noteListar(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  'Bearer ' + window.sessionStorage.getItem('miToken'))
    
    return this.http.get(this.Note, {headers: headers})
      .map(response => response.json());
  }//end noteLis

  //Guardar Nota
  noteGuardar(data){
    let headers = new Headers();
    let params = JSON.stringify({title: data.title, note: data.note, status: 0, category_id: data.categoria});
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('miToken'))

    return this.http.post(this.Note, params, {headers: headers})
      .map(response => response.json());
  }//end noteGuardar

  //Eliminar notas
  noteDelete(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization',  'Bearer ' + window.sessionStorage.getItem('miToken'))

    return this.http.delete(this.Note+'/'+data, {headers: headers} )
      .map( response => response.json() );
  }//End noteDelete

}
