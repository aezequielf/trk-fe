import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CuentaComponent } from './components/perfil/cuenta/cuenta.component';
import { GuiaPerfilComponent } from './components/perfil/guia/guia.perfil.component';
import { DestinosPipe } from './pipes/destinos.pipe';
import { RecorridoComponent } from './components/recorrido/recorrido.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerI18n } from './components/selec-fecha/selec-fecha.component';
import { ServiciosGuiaComponent } from './components/perfil/servicios-guia/servicios-guia.component';
import { AddeditServiciosComponent } from './components/perfil/servicios-guia/addedit-servicios/addedit-servicios.component';
import { DatePipe } from '@angular/common';
import { ValidarguiaComponent } from './components/perfil/guia/validarguia/validarguia.component';
import { LugaresPipePipe } from './pipes/lugares-pipe.pipe';
import { AgregaDestinosComponent } from './components/agrega-destinos/agrega-destinos.component';
import { ConfirmComponentComponent } from './components/modal/confirm-component/confirm-component.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    CuentaComponent,
    GuiaPerfilComponent,
    DestinosPipe,
    RecorridoComponent,
    ServiciosGuiaComponent,
    AddeditServiciosComponent,
    ValidarguiaComponent,
    LugaresPipePipe,
    AgregaDestinosComponent,
    ConfirmComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    RouterModule,
    HttpClientModule,
    NgbModule,
    NgbdDatepickerI18n,
    NgxPaginationModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
