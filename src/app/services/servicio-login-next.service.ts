import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginNextService {
  siguiente: string = '';
  private enviarSiguiente = new Subject<string>();
  enviarSiguienteObserv = this.enviarSiguiente.asObservable();

  enviarSiguienteLogin(siguiente : string){
    this.siguiente = siguiente;
    this.enviarSiguiente.next(siguiente)
  }

  constructor() { }
}
