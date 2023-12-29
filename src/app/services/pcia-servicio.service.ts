import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
// import { Pcia } from '../models/pcia'

@Injectable({
  providedIn: 'root'
})
export class PciaServicioService {

  url = "http://localhost:8000/pcias/";
  constructor( private curl : HttpClient) { }

  getPcias(): Observable<any> {
    return this.curl.get(this.url);
  }

}
