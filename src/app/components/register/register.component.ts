import { Component } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formUsuario : FormGroup;

  constructor( private fb: FormBuilder, private msjToast: ToastrService, private enrutar: Router, private servicioU: UsuarioService){
    this.formUsuario = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      email : ['',[Validators.email, Validators.required]],
      clave : ['', [Validators.required, Validators.minLength(8)]],
      clave2: ['', Validators.required]
    });
  }
// geters
  get nombre(){
    return this.formUsuario.get('nombre');
  }
  get apellido(){
    return this.formUsuario.get('apellido');
  }
  get email(){
    return this.formUsuario.get('email');
  }
  get clave(){
    return this.formUsuario.get('clave');
  }
  get clave2(){
    return this.formUsuario.get('clave2');
  }

  verificaclaves(){
    if (this.clave === this.clave2){
      return true
    }else{
      return false
    }
  }

  titleCase(str: string) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

  agregarUsuario(){
    const USUARIO : Persona = {
      nombre : this.formUsuario.get('nombre')?.value,
      apellido : this.formUsuario.get('apellido')?.value,
      email : this.formUsuario.get('email')?.value,
      clave : this.formUsuario.get('clave')?.value,
    }
    this.servicioU.agregoUsuario(USUARIO).subscribe({
      next: rta => this.msjToast.success(`${this.titleCase(this.nombre!.value)}, te registraste correctamente ya puedes ingresar`),
      error: err => this.msjToast.error(err.error.detail),
      complete: () => {this.enrutar.navigate(['/login']);}
    })
  }
}
