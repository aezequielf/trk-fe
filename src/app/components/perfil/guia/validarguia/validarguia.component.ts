import { Component, Input } from '@angular/core';
import { DatosValidar, Validacion } from 'src/app/models/interface-guia';
import { InterfaceRtaGeneral } from 'src/app/models/interface-rta-general';
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
 @Input() usuarioguiaID = '';
 @Input() email = '';
  formValida = false;
  provincia = 0 ;
  maildestino ='validaciontp@gmail.com';
  mensaje = '';  
  resolucion = '';


  ValidarGuiaProvincia(){
    this.formValida = true;
    if(this.validacion.length > 0  ){
      if (this.provincia == 1){
        this.provincia =25;
      } 
    }
  }

  resetComp(){
    setTimeout(() => {
      this.provincia = 0;

      this.resolucion = '';
      this.mensaje = '';
      
    }, 100 );
    
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
      next: rta => { this.mensaje = rta; this.provincia = 25},
      error: err => {this.mensaje = err.error.detail; this.provincia = 26}
    })
  }

}


