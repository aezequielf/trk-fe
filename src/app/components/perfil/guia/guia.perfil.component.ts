import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { subscribeOn } from 'rxjs';
import { InterfaceGuia } from 'src/app/models/interface-guia';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.perfil.component.html',
  styleUrls: ['./guia.perfil.component.css']
})
export class GuiaPerfilComponent {
  ineditable = false;
  muestraServicios  = false;
  ventanaValidar= false;
  constructor(private servusuario : UsuarioService,  private msjToast: ToastrService){}
  @Output() aGuia = new EventEmitter<boolean>();
  @Input() edita = false;
  @Input() email = ""; 
  @Input() in_guia : InterfaceGuia = {
    id: '',
    esguia: true,
    matricula : '',
    empresa : '',
    resolucion : '',
    cel :'',
    celalt : '',
    actividad : '',
  };
  
  guia: InterfaceGuia = this.in_guia;

  ngOnInit() {
    this.guia.id = this.in_guia.id;
    if (this.in_guia.resolucion != null){
      this.guia = this.in_guia;
    }
  }

  procesarGuia(){
    // como traigo los datos de la db presupongo que esguia es true, pero puede no ser así
    this.guia.esguia = true;    
    this.servusuario.actualizaGuia(this.guia).subscribe({
      next: rta => this.msjToast.success(rta),
      error: err => this.msjToast.error(err),
      complete: () => {this.edita = true; this.aGuia.emit();}    
    })
  }

  editar(){
    this.edita = false;
    this.ineditable = true;
  }

  misServicios(){
    this.muestraServicios = !this.muestraServicios; 
  }

  validarGuia(){
    this.ventanaValidar = true;
  }

}
