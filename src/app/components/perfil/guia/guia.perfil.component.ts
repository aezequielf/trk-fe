import { Component } from '@angular/core';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.perfil.component.html',
  styleUrls: ['./guia.perfil.component.css']
})
export class GuiaPerfilComponent {

  guia = {
    matricula : '',
    empresa : '',
    resolucion : '',
    celular : '',
    actividad : '',
  }

  procesarGuis(){
    console.log(this.guia);
  }

}
