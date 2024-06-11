import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addedit-servicios',
  templateUrl: './addedit-servicios.component.html',
  styleUrls: ['./addedit-servicios.component.css']
})
export class AddeditServiciosComponent {

  constructor(private tstmsj: ToastrService){}

  @Output() cancelaCarga= new EventEmitter();

  cancelar(){
    this.cancelaCarga.emit();
  }

  guardar(){
    this.tstmsj.success('travesía guardada');
  }
}
