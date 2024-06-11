import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    HttpClientModule,
    NgbModule,
    NgbdDatepickerI18n
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
