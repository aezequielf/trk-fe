import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DatosValidar, Validacion } from 'src/app/models/interface-guia';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-validarguia',
  templateUrl: './validarguia.component.html',
  styleUrls: ['./validarguia.component.css']
})
export class ValidarguiaComponent {

  constructor(private usuarioServ: UsuarioService){
  }
 @Input() validacion!: Validacion[] ;
  nuevaValid: Validacion = {
    provincia : '',
    token: '',
    validado: false,
    resolucion: ''
  } ;
 @Input() usuarioguiaID = '';
 @Input() email = '';
 @Output() InfoValidacion = new EventEmitter<Validacion>;
  formValida = false;
  provincia = 0 ;
  maildestino ='validaciontp@gmail.com';
  mensaje = '';  
  resolucion = '';


  ValidarGuiaProvincia(){
    this.formValida = true;
    if(this.validacion.length > 0  ){
      if (this.provincia == 1){
        if(this.validacion[0].validado){
          this.provincia = 27;
        }else{
          this.provincia =25;
          this.mensaje = this.validacion[0].token;
        }
      } 
    }
  }

  resetComp(){
    setTimeout(() => {
      this.provincia = 0;

      this.resolucion = '';
      this.mensaje = '';
      
    }, 100 );
    if (this.nuevaValid.provincia != ''){
      this.InfoValidacion.emit(this.nuevaValid);
    }
  
  }

  validarDatos(){
    var pcia = 'Nada';
    if(this.provincia == 1){
      pcia = "Córdoba"
    }
    
    const DATOS : DatosValidar = {
      email: this.email,
      provincia: pcia,
      resolucion : this.resolucion,

    };
    this.usuarioServ.validarGuia( this.usuarioguiaID, DATOS).subscribe({
      next: rta => { this.mensaje = rta.token; this.provincia = 25; this.nuevaValid = rta },
      error: err => {this.mensaje = err.error.detail; this.provincia = 26}
    })
  }

}


