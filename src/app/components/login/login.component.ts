import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicioLoginNextService } from 'src/app/services/servicio-login-next.service';
import { Credenciales } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  next: string | null = null;
  credenciales : FormGroup;

  constructor(private fb: FormBuilder, private enrutar: Router, private msjtoast: ToastrService, private ServicioLoginNext: ServicioLoginNextService, private servicioU : UsuarioService){
    this.credenciales = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      clave : ['', Validators.required ]
    })
  }

  //getters
  get email(){
    return this.credenciales.get('email')
  }

  get clave(){
    return this.credenciales.get('calve')
  }

  signin(){

    const CREDENCIIALES : Credenciales = {
      email : this.credenciales.get('email')?.value,
      clave : this.credenciales.get('clave')?.value,
    }
    this.servicioU.validarUsuario(CREDENCIIALES).subscribe({
      next: rta => this.msjtoast.info('Has ingresado correctamente',this.email?.value),
      error: err => this.msjtoast.error(err.error.detail),
      complete: () => {this.next = this.ServicioLoginNext.siguiente;
                      if (this.next != null){
                        this.ServicioLoginNext.enviarSiguienteLogin(null);
                        this.enrutar.navigate(['/'+this.next]);
                      } else {
                        this.enrutar.navigate(['/perfil']);
                      }}
    })
  }
}
