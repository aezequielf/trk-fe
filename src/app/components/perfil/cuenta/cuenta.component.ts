import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { InterfaceGuia } from 'src/app/interface-guia';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent{
  esguia:boolean = false;
  nombre = '';
  apellido = '';
  email = '';
  edita = false;
  constructor(private servicioUsuario : UsuarioService, private enrutar: Router){

  }
  guia : InterfaceGuia = {
    id: '',
    esguia: false,
    empresa : '',
    matricula : '',
    resolucion : '',
    cels: '',
    actividad: ''
  }
  
  ngOnInit(){
    this.servicioUsuario.usuarioActual().subscribe({
      next: rta => {this.nombre= rta.nombre; this.apellido= rta.apellido;
                    this.esguia = this.guia.esguia = rta.esguia; this.email= rta.email;
                    this.guia.empresa = rta.empresa; this.guia.matricula = rta.matricula;
                    this.guia.resolucion = rta.resolucion; this.guia.cels = rta.cels;
                    this.guia.actividad = rta.actividad; this.guia.id = rta.id;
      },
      error: err => this.enrutar.navigate(['/login']),
      complete:() => {this.edita = this.esguia;}
    })
  }

 esGuia(){
  if (this.esguia){
    this.esguia = false;
  }else{
    this.esguia = true;
  }
 }
}
