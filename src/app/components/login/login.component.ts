import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicioLoginNextService } from 'src/app/services/servicio-login-next.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  next: string | null = null;
  credenciales : FormGroup;

  constructor(private fb: FormBuilder, private enrutar: Router, private msjtoast: ToastrService, private ServicioLoginNext: ServicioLoginNextService){
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
    this.msjtoast.info('Has ingresado correctamente',this.email?.value);
    this.next = this.ServicioLoginNext.siguiente;
    if (this.next != null){
      this.ServicioLoginNext.enviarSiguienteLogin(null);
      this.enrutar.navigate(['/'+this.next]);
    } else {
      this.enrutar.navigate(['/perfil']);
    }
  }
}
