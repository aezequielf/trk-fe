import { Component } from '@angular/core';

@Component({
  selector: 'app-validarguia',
  templateUrl: './validarguia.component.html',
  styleUrls: ['./validarguia.component.css']
})
export class ValidarguiaComponent {


  formValida = false;
  provincia = 0 ;
  
  matricula = '';
  email = '';
  resolucion = '';
  actividad = '';


  ValidarGuiaProvincia(){
    this.formValida = true;
  }

  resetComp(){
    setTimeout(() => {
      this.provincia = 0;
      this.matricula = '';
      this.resolucion = '';
      this.actividad = '';
      this.email = ''      
    }, 100 );
    
  }

  validarDatos(){
    const DATOS = {
      email: this.email,
      matricula :this.matricula,
      resolucion : this.resolucion,
      actividad: this.actividad
    };
    console.log(DATOS);
    this.provincia = 26;
    
  }

}


