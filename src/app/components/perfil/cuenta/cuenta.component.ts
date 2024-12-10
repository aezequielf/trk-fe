import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { InterfaceGuia } from 'src/app/models/interface-guia';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent{
  esguia:boolean = false;
  usuario : Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    esguia: false,
    creado: '',
    empresa: null,
    cel: null,
    celalt:  null,
    validacion:  null
  } ;
  edita = false;
  constructor(private servicioUsuario : UsuarioService, private enrutar: Router){

  }
  guia : InterfaceGuia = {
    id: '',
    esguia: false,
    empresa : '' ,
    cel: '',
    celalt: '' ,
    validacion: []
  }
  
  ngOnInit(){
    this.servicioUsuario.usuarioActual().subscribe({
      next: rta => {this.usuario = rta;
                    if (this.usuario.esguia != null){
                      this.esguia = this.guia.esguia = rta.esguia;
                      this.guia.empresa = rta.empresa!; this.guia.validacion = rta.validacion!;
                      this.guia.cel = rta.cel!; this.guia.id = this.usuario.id
                      if (rta.celalt != null)
                        this.guia.celalt = rta.celalt!; 
                    }  
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
 bajaGuia(){
  console.log('Baja del guía id : ',this.guia.id);
 }
}
