import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InterfaceGuia } from 'src/app/models/interface-guia';
import { Travesia } from 'src/app/models/interfaces-travesia';
import { TravesiaServicioService } from 'src/app/services/travesia-servicio.service';

@Component({
  selector: 'app-servicios-guia',
  templateUrl: './servicios-guia.component.html',
  styleUrls: ['./servicios-guia.component.css']
})
export class ServiciosGuiaComponent implements OnInit {

  constructor (private traveserv : TravesiaServicioService, private toastmsj : ToastrService){}

  p!: number;

  travesias? : Travesia []
  unatravesia! : Travesia;
  agregatravesia = false;
  editatravesia = false;
  copiatravesia = false;

  titulo = '';
  mensaje = '';
  confirma = false;

  @Input() in_guia? : InterfaceGuia;

  guia?: InterfaceGuia;
  
  datosanexos = {
    idguia :  ' ',
    empresa : '',
    accion : ''
  }

  ngOnInit(): void {
    this.guia = this.in_guia;
    this.traveserv.lista_travesias_delguia(this.guia!.id!).subscribe({
      next: rta => this.travesias = rta,      
      error: err => console.log(err),
    })
    this.datosanexos.idguia = String(this.guia?.id);
    this.datosanexos.empresa = String(this.guia?.empresa);
    
  }

  @Output() Ocultar = new EventEmitter();
  
  datoAnexos(){
    if (this.agregatravesia){
      this.datosanexos.accion = 'nuevo';
    }
    if (this.editatravesia){
      this.datosanexos.accion = 'editar';
    }  
  }
 
  editar(indice: number){
    this.editatravesia = true;
    this.unatravesia =this.travesias![indice];
  }

  copiar( indice: number){
    this.copiatravesia = true;
    this.unatravesia =this.travesias![indice];
    this.datosanexos.accion = 'nuevo' 
  }

  borrar(indice: number){
    this.unatravesia = this.travesias![indice];
    this.mensaje = `Está por eliminar la travesía de ${this.travesias![indice].lugar}`;
    this.titulo = '¿ Confirme eliminación ?';
  }

  confirmaBorrado(){
    this.traveserv.borra_travesia(this.unatravesia.id).subscribe({
      next: rta => this.toastmsj.warning(rta,'Eliminacion Confirmada'),
      error: err => console.log(err),
      complete: () => this.ngOnInit()     })
  }
  ocultoServicios(){
    this.Ocultar.emit();
  }

}
