import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDestinosService {
  url =  "http://localhost:8000/destinos/pcia"
  constructor( private geturl: HttpClient) { }

  getdestinos(id: string): Observable<any>{
    return this.geturl.get(`${this.url}/${id}`);
  }
}
