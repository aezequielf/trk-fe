import { Component } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formUsuario : FormGroup;

  constructor( private fb: FormBuilder, private msjToast: ToastrService, private enrutar: Router){
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

  agregarUsuario(){
    console.log(this.formUsuario);
    this.msjToast.success('Te has registrdo correctamente, ahora ingresa al sistema',this.nombre!.value);
    this.enrutar.navigate(['/login']);
  }
}
