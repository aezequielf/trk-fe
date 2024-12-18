import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pcia } from '../models/pcia';
// import { Pcia } from '../models/pcia'

@Injectable({
  providedIn: 'root'
})
export class PciaServicioService {
  url = `${environment.apiUrl}pcias/`;
  constructor( private curl : HttpClient) { }

  getPcias(): Observable<Pcia[]> {
    return this.curl.get<Pcia[]>(this.url);
  }

}
