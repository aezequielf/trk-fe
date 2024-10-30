import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-component',
  templateUrl: './confirm-component.component.html',
  styleUrls: ['./confirm-component.component.css']
})
export class ConfirmComponentComponent {

  @Input() mensaje = "titulo predeterminado";
  @Input() titulo = "mensaje predeterminado !!!";
  @Output() confirma = new EventEmitter<boolean>();

  confirmacion(){
    this.confirma.emit(true);
  }
}
