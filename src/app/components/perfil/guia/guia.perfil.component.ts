import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.perfil.component.html',
  styleUrls: ['./guia.perfil.component.css']
})
export class GuiaPerfilComponent {

  @Input() edita = false;

  guia = {
    matricula : '',
    empresa : '',
    resolucion : '',
    celular : '',
    actividad : '',
  }

  procesarGuia(){
    console.log(this.edita);
    console.log(this.guia);
  }

  editar(){
    this.edita = false;
  }

}
