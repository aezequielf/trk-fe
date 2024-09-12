import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validarguia',
  templateUrl: './validarguia.component.html',
  styleUrls: ['./validarguia.component.css']
})
export class ValidarguiaComponent {

 @Input() usuarioguiaID = '';
 @Input() email = '';
  formValida = false;
  provincia = 0 ;
  maildestino ='validaciontp@gmail.com';
  
 
  resolucion = '';


  ValidarGuiaProvincia(){
    this.formValida = true;
  }

  resetComp(){
    setTimeout(() => {
      this.provincia = 0;

      this.resolucion = '';

      this.email = ''      
    }, 100 );
    
  }

  validarDatos(){
    var pcia = '';
    if(this.provincia == 1){
      pcia = "Córdoba"
    }
    const DATOS = {
      email: this.email,
      provincia: pcia,
      resolucion : this.resolucion,

    };
    console.log(DATOS);
    this.provincia = 25;
    
  }

}


