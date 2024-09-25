import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Travesia} from 'src/app/models/interfaces-travesia';
import { Pcia } from 'src/app/models/pcia';
import { ServicioDestinosService } from 'src/app/services/servicio-destinos.service';
import { TravesiaServicioService } from 'src/app/services/travesia-servicio.service';

@Component({
  selector: 'app-addedit-servicios',
  templateUrl: './addedit-servicios.component.html',
  styleUrls: ['./addedit-servicios.component.css']
})



export class AddeditServiciosComponent implements OnInit{

  constructor(private tstmsj: ToastrService, private srvtravesia : TravesiaServicioService, private tuboFecha: DatePipe, private servDestin: ServicioDestinosService){}
  
  ngOnInit(): void {
    if (this.in_travesia != undefined){
      this.travesia = this.in_travesia;
      this.nuevaFecha = this.tuboFecha.transform(this.travesia.fecha ,'yyyy-MM-dd')!;
    }
    
  }
  
  pipedestinos = '';
  senial = true ;
  indiceDestino = -1;
  nuevaFecha = '';
  fechas : string[] = [];
  lugares : Pcia[] = [];
  

  @Output() cancelaCarga= new EventEmitter();
  @Output() ActualizaTravesias = new EventEmitter();

  @Input() datosguia = {
    idguia : '',
    empresa : '',
    accion : 'editar'
  }
  @Input() in_travesia? : Travesia;

  travesia : Travesia = {
    pencuentro: '',
    id: '',
    destino_id: '',
    dificultad: '',
    lugar: '',
    pcia: '',
    pcia_id: '',
    fecha: '' ,
    hora: '',
    guia_id: '',
    empresa: '',
    coordenadas: '',
    desc: '',
    ingreso: false,
    detingreso: '',
    traslado: false,
    dettraslado: '',
    desayuno: false,
    rmarcha: false,
    merienda: false,
    detpension: '',
    pernocte: false,
    detpernocte: '',
    botiquin: false,
    detbotiquin: '',
    csatelital: false,
    cvhf: false,
    detcomunicaciones: '',
    rfoto: false,
    detfoto: '',
    scarga: false,
    detcarga: '',
    imontania: false,
    detindumentaria: '',
    cequipaje: false,
    detcuidado: '',
    precio: 0
  };
  
  // redefino interface travesía en travesia2 para poder enviar un array en fecha

  pagina = 1;

  cancelar(){
    this.cancelaCarga.emit();
  }

  consutloDestinos(){
    if (this.pipedestinos.length > 2 && this.senial ){
      this.senial = false;
      this.servDestin.getDestinos(this.pipedestinos).subscribe({
        next: rta => this.lugares = rta,
        error: err => console.log(err),
        complete: () => {}
        ,       
      })
      
    }
    if (this.pipedestinos.length < 2 && !this.senial ){
      this.senial = true;
    }
    
  }

  agregaFechas(){
    let fechaHoy = new Date();
    if(this.nuevaFecha == ''){
      this.tstmsj.warning('No puedo agregar una fecha vacía ...');
      return;    
    }
    if (this.fechas.includes(this.nuevaFecha)){
      this.tstmsj.warning('Fecha ya en lista !!!');
      return;
    }
    if (Date.parse(this.nuevaFecha) <= fechaHoy.getTime() ){
      this.tstmsj.warning('No se pueden agregar fechas pasadas o agregar el día de hoy !!!');
      return;
    }
    this.fechas.push(this.nuevaFecha);
  }

  quitaFechas(indice: number){
    this.fechas.splice(indice,1);
  }

  setearDestinos(){
    if (this.indiceDestino < 0){
      return;
    }
    this.travesia.pcia_id =this.lugares[this.indiceDestino].id;
    this.travesia.pcia = this.lugares[this.indiceDestino].nombre;
    this.travesia.destino_id = this.lugares[this.indiceDestino].destinos!.id;
    this.travesia.lugar = this.lugares[this.indiceDestino].destinos!.lugar;
    console.log(this.travesia);
    console.log(this.fechas);
    
  }

  guardar(){
    // cargo a mano algunos valores por ahora antes de resolver como los hago coherentes.
   
    if (this.in_travesia == undefined){
      this.travesia.guia_id = this.datosguia.idguia;
      this.travesia.empresa = this.datosguia.empresa;
    }
      
    if (this.datosguia.accion == 'editar'){
      this.srvtravesia.actualiza_travesia(this.travesia).subscribe({
        next: rta => this.tstmsj.success(`travesía ${rta.lugar} de empresa ${rta.empresa} actualizada correctamente`),
        error: err => this.tstmsj.error(`No se pudo actualizar la travesia ${err}`),
        complete: () => this.cancelaCarga.emit()
       })
      return
    }

    if(this.travesia.dificultad == ''){
      this.tstmsj.warning('Debería especificar la dificultad');
      this.pagina = 1;
      return
    }

    if (this.fechas.length < 1){
      this.tstmsj.warning('Debería cargar al menos una fecha para prestar el servicio !');
      this.pagina = 1;
      return
    }
    
    if(this.travesia.hora == ''){
      this.tstmsj.warning('Debería especificar el horario de encuentro !');
      this.pagina = 1;
      return
    }

    if(this.travesia.pencuentro == ''){
      this.tstmsj.warning('Debería especificar el un punto donde encontrarse');
      this.pagina = 1;
      return
    }

    if(this.travesia.precio == 0){
      this.tstmsj.warning('Tenés que ponerle un precio a tus servicios');
      return
    }

    for (let ind = 0 ; ind < this.fechas.length; ind++){
      // aca ejecuto los post de acuerdo a la cantidad de fechas que existan
      this.travesia.fecha = this.fechas[ind];
      this.srvtravesia.nueva_travesia_guia(this.travesia).subscribe({
        next: rta => this.tstmsj.success(`travesía ${rta.lugar}, fecha ${this.tuboFecha.transform(rta.fecha ,'dd/MM/yyyy')} guardada para ${rta.empresa} `),
        error: err =>  console.log(err),
        complete: () => {this.ActualizaTravesias.emit(); this.cancelaCarga.emit()}
      });
    }
  }
}
