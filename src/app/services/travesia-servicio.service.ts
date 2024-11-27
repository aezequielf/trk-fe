import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Travesia } from '../models/interfaces-travesia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravesiaServicioService {

  url =  `${environment.apiUrl}travesias`;

  constructor(private curl: HttpClient) { }

  

  lista_travesias_delguia(id_guia: string): Observable<Array<Travesia>>{
   return this.curl.get<Array<Travesia>>(`${this.url}/guia/${id_guia}`);
  }

  nueva_travesia_guia( travesia : Travesia): Observable<Travesia>{
    return this.curl.post<Travesia>(`${this.url}/add`, travesia)
  }

  actualiza_travesia( travesia: Travesia): Observable<Travesia>{
    return this.curl.put<Travesia>(`${this.url}/actualiza`, travesia)
  }

  borra_travesia(id: string): Observable<string>{
    return this.curl.delete<string>(`${this.url}/del/${id}`)
  }

  listarTravesiasPciaFecha(id: string, fecha: string): Observable<any>{
    return this.curl.get(`${this.url}/pcia/${id}/${fecha}`);
  }

  listarTravesiasPciaTodas(id: string): Observable<any>{
    return this.curl.get(`${this.url}/pcia/${id}/todas`);
  }
  
  listarTRavesiaxDestino(id : string): Observable<Array<Travesia>>{
    return this.curl.get<Array<Travesia>>(`${this.url}/lista/${id}`);
  }

  listaUnaTravesia(id_destino: string): Observable<any>{
    return this.curl.get(`${this.url}/${id_destino}`);
  }

  listaTravesiasFecha(id: string): Observable<any>{
    return this.curl.get(`${this.url}/pcia/${id}/fechas`);
  }

}
