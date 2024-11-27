import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destino, Pcia } from '../models/pcia';
@Injectable({
  providedIn: 'root'
})
export class ServicioDestinosService {
  url =  `${environment.apiUrl}destinos`
  constructor( private geturl: HttpClient) { }

  getDestinos(busqueda: string): Observable<Pcia[]>{
    return this.geturl.get<Pcia[]>(`${this.url}/${busqueda}`);
  }
  
  getDestinosPcia(id: string): Observable<Pcia[]>{
    return this.geturl.get<Pcia[]>(`${this.url}/pcia/${id}`);
  }

  addDestinoPcia(pcia: Pcia): Observable<string>{
    const destino: Destino = pcia.destinos!;
     return this.geturl.post<string>(`${this.url}/add/${pcia.id}`, destino)
   }

}
