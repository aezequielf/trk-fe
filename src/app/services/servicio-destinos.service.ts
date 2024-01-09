import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicioDestinosService {
  url =  `${environment.apiUrl}destinos/pcia`
  constructor( private geturl: HttpClient) { }

  getdestinos(id: string, fecha: string): Observable<any>{
    return this.geturl.get(`${this.url}/${id}/${fecha}`);
  }
}
