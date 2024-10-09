import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Destino, Pcia } from 'src/app/models/pcia';
import { PciaServicioService } from 'src/app/services/pcia-servicio.service';
import { ServicioDestinosService } from 'src/app/services/servicio-destinos.service';

@Component({
  selector: 'app-agrega-destinos',
  templateUrl: './agrega-destinos.component.html',
  styleUrls: ['./agrega-destinos.component.css']
})
export class AgregaDestinosComponent implements OnInit {
  constructor(private srvtoast : ToastrService, private srvcpcias: PciaServicioService, private srvcdetinos : ServicioDestinosService){}

  provincias : Pcia[] = [];
  
  ngOnInit(): void {
      this.srvcpcias.getPcias().subscribe({
        next: rta => this.provincias = rta,
        error: err =>this.srvtoast.error(`Problemas de conexión ${err}, intente más tarde`, 'Error Fatal'),
        complete: () => {}
        
      });
   
    //console.log(`Se ejecuto ngoninit`);
    this.provincia = '0';
       
  }

  destinos : Pcia[] = [];
  provincia = '0';
  pipelugares = '';

  nuevoLugar = '';
  nuevaArea = '';

  cargaDestinos(){    
    this.srvcdetinos.getDestinosPcia(this.provincia).subscribe({
      next : rta => this.destinos = rta,
      error: err => this.srvtoast.error(`Error de conexión, intente más tarde: ${err}`, 'Erro Fatal')
    })
    
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
    const nuevoDestino: Pcia = {
      id : this.provincia,
      nombre : this.destinos[0].nombre,
      destinos : {
        id : "",
        lugar: this.Titulo(this.nuevoLugar.trim()),
        area: this.nuevaArea
      }
    }
    // cargo en db el destino
    this.srvcdetinos.addDestinoPcia(nuevoDestino).subscribe({
      next: rta => this.srvtoast.success(rta, 'Agregado Exitoso'),
      error: err => this.srvtoast.error(err, 'Error crítico'),
      complete: () => {
        //lo agrego en el array actual si la paticion a la api se realizó correctamente
        this.destinos.push(nuevoDestino)
        this.destinos.sort((a,b) => a.destinos!.lugar.localeCompare(b.destinos!.lugar))

      }
    })


    
    //console.log(nuevoDestino);
    // reinicio variables   
    this.pipelugares = this.nuevoLugar;
    this.nuevoLugar = '';
    this.nuevaArea = '';
  }

}
