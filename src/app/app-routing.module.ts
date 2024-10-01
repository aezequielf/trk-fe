import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CuentaComponent } from './components/perfil/cuenta/cuenta.component';
import { GuiaComponent } from './components/guia/guia.component';
import { RecorridoComponent } from './components/recorrido/recorrido.component';
import { AgregaDestinosComponent } from './components/agrega-destinos/agrega-destinos.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'search', component: SearchComponent},
  {path : 'perfil', component: CuentaComponent},
  {path : 'guia', component: GuiaComponent},
  {path : 'recorrido', component: RecorridoComponent},
  {path : 'agdestinos', component: AgregaDestinosComponent},
  {path : '**', redirectTo: '',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
