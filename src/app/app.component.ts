import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  srvUs = inject(UsuarioService);
  msj = inject(ToastrService);
  
  ngOnInit(): void {
    this.srvUs.usuarioActual().subscribe({
      next: rta => this.srvUs.estadoUsuarioActual.set(rta),
      error : () => this.srvUs.estadoUsuarioActual.set(null)
     })
    
  }
  title = 'trk-fe';
  logout(){
    localStorage.clear();
    this.srvUs.estadoUsuarioActual.set(null);
    this.msj.info('Te espetamos nuevamente pronto !!!', 'Saliste de tu cuenta');
  }
}
