import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Travesia } from 'src/app/models/interfaces-travesia';
import { TravesiaServicioService } from 'src/app/services/travesia-servicio.service';

@Component({
  selector: 'app-addedit-servicios',
  templateUrl: './addedit-servicios.component.html',
  styleUrls: ['./addedit-servicios.component.css']
})
export class AddeditServiciosComponent implements OnInit{

  constructor(private tstmsj: ToastrService, private srvtravesia : TravesiaServicioService, private tuboFecha: DatePipe){}
  
  ngOnInit(): void {
    if (this.in_travesia != undefined){
      this.travesia = this.in_travesia;
      this.travesia.fecha = this.tuboFecha.transform(this.travesia.fecha ,'yyyy-MM-dd')!;
    }
    
  }
  
  

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
  
  pagina = 1;

  cancelar(){
    this.cancelaCarga.emit();
  }


  guardar(){
    // cargo a mano algunos valores por ahora antes de resolver como los hago coherentes.
    if (this.in_travesia == undefined){
      this.travesia.pcia_id = '656e59c935a4cd190c93b4b7';
      this.travesia.pcia = 'Cordoba';
      this.travesia.guia_id = this.datosguia.idguia;
      this.travesia.empresa = this.datosguia.empresa;
      this.travesia.dificultad = 'alta';
      this.travesia.destino_id = '65a1b14c53c32f486c6409af';
      this.travesia.lugar = 'Los Gigantes';
    }
      
    if (this.datosguia.accion == 'editar'){
      this.srvtravesia.actualiza_travesia(this.travesia).subscribe({
        next: rta => this.tstmsj.success(`travesía ${rta.lugar} de empresa ${rta.empresa} actualizada correctamente`),
        error: err => this.tstmsj.error(`No se pudo actualizar la travesia ${err}`),
        complete: () => this.cancelaCarga.emit()
       })
      return
    }


    this.srvtravesia.nueva_travesia_guia(this.travesia).subscribe({
      next: rta => this.tstmsj.success(`travesía ${rta.lugar} guardada para ${rta.empresa} `),
      error: err =>  console.log(err),
      complete: () => {this.ActualizaTravesias.emit(); this.cancelaCarga.emit()}
    });
    
  }
}
