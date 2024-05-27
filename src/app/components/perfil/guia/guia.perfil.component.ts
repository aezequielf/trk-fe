import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { subscribeOn } from 'rxjs';
import { InterfaceGuia } from 'src/app/interface-guia';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.perfil.component.html',
  styleUrls: ['./guia.perfil.component.css']
})
export class GuiaPerfilComponent {
  ineditable = false;
  constructor(private servusuario : UsuarioService,  private msjToast: ToastrService){}

  @Input() edita = false;
  @Input() in_guia : InterfaceGuia = {
    id: '',
    esguia: true,
    matricula : '',
    empresa : '',
    resolucion : '',
    cels :'',
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
    this.servusuario.actualizaGuia(this.guia).subscribe({
      next: rta => this.msjToast.success(rta),
      error: err => this.msjToast.success(err),
      complete: () => this.edita = true    
    })
    console.log(this.guia);
  }

  editar(){
    this.edita = false;
    this.ineditable = true;
  }

}
