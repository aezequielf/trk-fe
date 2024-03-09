import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicioDestinosService {
  url =  `${environment.apiUrl}destinos`
  constructor( private geturl: HttpClient) { }

  getdestinos(id: string, fecha: string): Observable<any>{
    return this.geturl.get(`${this.url}/pcia/${id}/${fecha}`);
  }
  getdestinosfechas(id: string): Observable<any>{
    return this.geturl.get(`${this.url}/pcia/${id}/fechas`);
  }
  getdestinostodos(id: string): Observable<any>{
    return this.geturl.get(`${this.url}/pcia/${id}/todas`);
  }
  getdetallesdestino(id_destino: string): Observable<any>{
    return this.geturl.get(`${this.url}/${id_destino}`);
  }
}
