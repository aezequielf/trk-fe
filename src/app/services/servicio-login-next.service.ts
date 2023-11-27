import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginNextService {
  siguiente: string | null = null;
//  private enviarSiguiente = new Subject<string>();
//  enviarSiguienteObserv = this.enviarSiguiente.asObservable();

  enviarSiguienteLogin(siguiente : string | null){
    this.siguiente = siguiente;
//    this.enviarSiguiente.next(siguiente)
  }

  constructor() { }
}
