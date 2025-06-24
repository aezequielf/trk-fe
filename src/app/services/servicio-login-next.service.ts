import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginNextService {
  constructor() { }
  siguiente: string | null = null;
  idsiguiente: string | null = null;
//  private enviarSiguiente = new Subject<string>();
//  enviarSiguienteObserv = this.enviarSiguiente.asObservable();

  enviarSiguienteLogin(siguiente : string | null, idSiguiente : string | null) {
    this.siguiente = siguiente;
    this.idsiguiente = idSiguiente;
        
//    this.enviarSiguiente.next(siguiente)
  }

    // Guarda el dato en la variable local y en el sessionStorage
  setData(newData: any): void {
    sessionStorage.setItem('dataSearch', JSON.stringify(newData));
  }
  
    // Recupera el dato almacenado
  getData(): any | null {
    const savedData = sessionStorage.getItem('dataSearch');
    let data = null;
    if (savedData) {
      try {
        data = JSON.parse(savedData);
        return data;
        } catch (error) {
          return null;
        }
    }
  }
  
    // Limpia el dato
  clearData(): void {
    sessionStorage.removeItem('dataSearch');
  }

}
