import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  
  ngOnInit(){
    this.servicioUsuario.usuarioActual().subscribe({
      next: rta => {this.nombre= rta.nombre; this.apellido= rta.apellido;
                    this.esguia = rta.esguia; this.email= rta.email;
      },
      error: err => this.enrutar.navigate(['/login']),
      complete:() => {this.edita = this.esguia}
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
