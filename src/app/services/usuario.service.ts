import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona, Credenciales, Usuario, SessionID } from '../models/usuario';
import { environment } from 'src/environments/environment';
import { InterfaceGuia, DatosValidar, Validacion } from '../models/interface-guia';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url =  `${environment.apiUrl}usuarios`;

  constructor(private curl: HttpClient) { }

  agregoUsuario( usuairo: Persona): Observable<string>{
    return this.curl.post<string>(`${this.url}/add`, usuairo);
  }
 
  actualizaGuia( guia : InterfaceGuia): Observable<string>{
    return this.curl.put<string>(`${this.url}/${guia.id}/aguia`, guia);
  }

  validarUsuario( credenciales: Credenciales): Observable<SessionID>{
    return this.curl.post<SessionID>(`${this.url}/login`, credenciales);
  }
  usuarioActual(): Observable<Usuario>{
    if (localStorage.getItem('tpointT') === null)
      return this.curl.get<Usuario>(`${this.url}/yo`);
 // const TOKEN = localStorage.getItem('tpointT');
    const HTTPHEAD = new HttpHeaders({
        'Authorization' : `Bearer ${localStorage.getItem('tpointT')}`
      })
    
    return this.curl.get<Usuario>(`${this.url}/yo`,{ headers: HTTPHEAD});
  }

    
  validarGuia(id : string, DATOS: DatosValidar): Observable<Validacion>{
    return this.curl.put<Validacion>(`${this.url}/${id}/valida_guia`, DATOS);
  }
}
