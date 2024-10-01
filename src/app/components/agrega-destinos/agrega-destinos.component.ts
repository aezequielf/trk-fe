import { Component } from '@angular/core';
import { Pcia } from 'src/app/models/pcia';

@Component({
  selector: 'app-agrega-destinos',
  templateUrl: './agrega-destinos.component.html',
  styleUrls: ['./agrega-destinos.component.css']
})
export class AgregaDestinosComponent {

  destinos : Pcia[] = [
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
    }
  ];

  pipelugares = '';

}
