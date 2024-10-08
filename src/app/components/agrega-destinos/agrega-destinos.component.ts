import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pcia } from 'src/app/models/pcia';

@Component({
  selector: 'app-agrega-destinos',
  templateUrl: './agrega-destinos.component.html',
  styleUrls: ['./agrega-destinos.component.css']
})
export class AgregaDestinosComponent {
  constructor(private srvtoast : ToastrService){}
  destinos : Pcia[] = [];
  provincia = '0';
  pipelugares = '';

  nuevoLugar = '';
  nuevaArea = '';

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
    if (!this.nuevoLugar.trim()){
      this.srvtoast.show('No ingresaste ningún lugar','Atención !!!',{ positionClass: 'toast-top-full-width'});
      return;
    }
    if (!this.nuevaArea.trim()){
      this.srvtoast.show('No ingresaste coordenadas gegráficas, se usan para pronósticos de tiempo','Ingrese coordenadas',{ positionClass: 'toast-top-full-width'});
      return;
    }
    let [lat, long] = this.nuevaArea.trim().split(',');
    try{
      lat = lat.trim();
      long = long.trim();
    }catch{
      this.srvtoast.show('Revise las corrdenadas geográficas', 'Datos inválidos',{ positionClass: 'toast-top-full-width'});
      return;
    }
    let patron = /-?\d{2}\.\d{4,7}/
    if( !patron.test(lat) || !patron.test(long)){
      this.srvtoast.show('El formato de las cordenadas no parece ser el correcto. Nota: se necesitan al menos 4 digitos luego del punto','Ingreso inválido',{ positionClass: 'toast-top-full-width'})
      return;
    }
    this.destinos.push({
      id : "656e59c935a4cd190c93b4b7",
      nombre : "Córdoba",
      destinos : {
        id : "fffffffffff",
        lugar: this.Titulo(this.nuevoLugar.trim()),
        area: "Area nueva"
      }
    })

    this.destinos.sort((a,b) => a.destinos!.lugar.localeCompare(b.destinos!.lugar))
    
    this.pipelugares = this.nuevoLugar;
    this.nuevoLugar = '';
    this.nuevaArea = '';
  }

}
