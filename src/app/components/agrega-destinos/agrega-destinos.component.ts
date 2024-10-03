import { Component } from '@angular/core';
import { Pcia } from 'src/app/models/pcia';

@Component({
  selector: 'app-agrega-destinos',
  templateUrl: './agrega-destinos.component.html',
  styleUrls: ['./agrega-destinos.component.css']
})
export class AgregaDestinosComponent {

  destinos : Pcia[] = [];

  pipelugares = '';

  nuevoLugar = '';

  cargaDestinos(){    
    this.destinos.push(
      {
        "id":  "656e59c935a4cd190c93b4b7",
        "nombre": "Córdoba",
        "destinos": {
          "id": "66edf32c45445b32dc8eb3dc",
          "lugar": "Los Gigantes",
          "area": "los gigantes"
        }
      },
      {
        "id": "656e59c935a4cd190c93b4b7",
        "nombre": "Córdoba",
        "destinos": {
          "id": "66edf32c45445b32dc8eb3e2",
          "lugar": "Santuario del Yuspe",
          "area": "yuspe"
        }
      },
      {
        "id": "656e59c935a4cd190c93b4b7",
        "nombre": "Córdoba",
        "destinos": {
          "id": "66edf32c45445b32dc8eb3e4",
          "lugar": "Salinas Grandes",
          "area": "salinas"
        }
      },
      {
        "id": "656e59c935a4cd190c93b4b7" ,
        "nombre": "Córdoba",
        "destinos": {
          "id": "66edf32c45445b32dc8eb3dd",
          "lugar": "Quebrada del Condorito",
          "area": "quebrada del condor"
        }
      },
      {
        "id": "656e59c935a4cd190c93b4b7",
        "nombre": "Córdoba",
        "destinos": {
          "id": "66edf32c45445b32dc8eb3e2",
          "lugar": "Santuario del Yuspe",
          "area": "yuspe"
        }
      },
      {
        "id": "656e59c935a4cd190c93b4b7",
        "nombre": "Córdoba",
        "destinos": {
          "id": "66edf32c45445b32dc8eb3e4",
          "lugar": "Salinas Grandes",
          "area": "salinas"
        }
      }
    ) ;
  
  }

  Titulo(frase: string): string {
    return frase
      .split(' ') // Divide la frase en palabras
      .map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
      ) // Capitaliza la primera letra de cada palabra
      .join(' '); // Une las palabras de nuevo en una frase
  }

  agregarDetino(){
    this.destinos.push({
      id : "656e59c935a4cd190c93b4b7",
      nombre : "Córdoba",
      destinos : {
        id : "fffffffffff",
        lugar: this.Titulo(this.nuevoLugar),
        area: "Area nueva"
      }
    })

    this.destinos.sort((a,b) => a.destinos!.lugar.localeCompare(b.destinos!.lugar))
    
    this.pipelugares = this.nuevoLugar;
  }

}
