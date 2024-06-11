import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InterfaceGuia } from 'src/app/models/interface-guia';

@Component({
  selector: 'app-servicios-guia',
  templateUrl: './servicios-guia.component.html',
  styleUrls: ['./servicios-guia.component.css']
})
export class ServiciosGuiaComponent {

  agregatravesia = false;
  editatravesia = false;

  @Input() in_guia? : InterfaceGuia;

  guia?: InterfaceGuia;
  
  ngOnInit() {
    this.guia = this.in_guia;
  }

  @Output() Ocultar = new EventEmitter();

  ocultoServicios(){
    this.Ocultar.emit();
  }

}
