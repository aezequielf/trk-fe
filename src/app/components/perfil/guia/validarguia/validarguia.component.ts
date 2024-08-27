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
    this.provincia = 0;
    this.matricula = '';
    this.resolucion = '';
    this.actividad = '';
  }

}


