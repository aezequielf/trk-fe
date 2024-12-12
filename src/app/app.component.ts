import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msj = inject(ToastrService)
  title = 'trk-fe';
  logout(){
    localStorage.clear();
    this.msj.info('Te espetamos nuevamente pronto !!!', 'Saliste de tu cuenta');
    console.log('login OUT');
  }
}
