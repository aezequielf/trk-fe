import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona, Credenciales } from '../models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url =  `${environment.apiUrl}usuarios`;

  constructor(private curl: HttpClient) { }

  agregoUsuario( usuairo: Persona): Observable<any>{
    return this.curl.post(`${this.url}/add`, usuairo);
  }
  validarUsuario( credenciales: Credenciales): Observable<any>{
    return this.curl.post(`${this.url}/login`, credenciales);
  }
  usuarioActual(): Observable<any>{
    if (localStorage.getItem('tpointT') === null)
      return this.curl.get(`${this.url}/yo`);
 // const TOKEN = localStorage.getItem('tpointT');
    const HTTPHEAD = new HttpHeaders({
        'Authorization' : `Bearer ${localStorage.getItem('tpointT')}`
      })
    
    return this.curl.get(`${this.url}/yo`,{ headers: HTTPHEAD});
  }
}
