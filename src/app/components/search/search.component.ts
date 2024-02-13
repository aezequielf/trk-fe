import { Component, OnInit } from '@angular/core';
import { Pcia, DetalleDetino } from 'src/app/models/pcia';
import { PciaServicioService } from 'src/app/services/pcia-servicio.service';
import { ServicioDestinosService } from 'src/app/services/servicio-destinos.service';
import { ServicioLoginNextService } from 'src/app/services/servicio-login-next.service';

export interface Lugar{
  lugar : string[],
  fecha: string
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor ( private ServicioLoginNext : ServicioLoginNextService, private servicioPcia : PciaServicioService, private ServicioDestino : ServicioDestinosService){

  }
  ngOnInit(): void {
    this.obtenerPcias();
  }

  listaPcia : Pcia[] = [];
  verform = true;
  verlista = false;
  verdeta = false;
  getcomp = false;
  mensajeModal = '';
  tituloModal = '';
  pcia: string = '0';
  travesia: string = '';
  lista: object[] = [];
  listaDetalles: DetalleDetino[] = [];
  muestraDetalle!: DetalleDetino;
  fechafull: Date = new Date()
  //fecha: string = this.fechafull.getFullYear()+'-'+(this.fechafull.getMonth()+1)+'-'+this.fechafull.getDate()
  fecha: string = '';
  fecha2: string = '';
  fechasTodas = false;
  nom_dest = '';
  
  obtenerPcias(){
    this.servicioPcia.getPcias().subscribe({
      next: rta => { this.listaPcia = rta},
      error: err => {console.log(err)},
      complete: () => {}
    });
  }

  todasFechas(){
    if (this.fechasTodas){
      this.fechasTodas = false;
    }else{
      this.fecha2 = '';
      this.fechasTodas = true;
      this.obtenerDestinos();
    }
  }
  
  obtenerDestinos(){
    if (this.fecha2 != ''){
      this.fechasTodas = false;
    }
    if (this.fechasTodas){
      this.ServicioDestino.getdestinostodos(this.pcia).subscribe({
        next : rta => this.lista = rta,
        error: err => console.log(err),
        complete: () => {this.getcomp = true;}
      });
    }else{
      this.ServicioDestino.getdestinos(this.pcia,this.fecha2).subscribe({
        next : rta => this.lista = rta,
        error: err => console.log(err),
        complete: () => {this.getcomp = true;}
      });
    }
    
  }
  
  resetLista(){
    this.getcomp = false;
    this.lista = [];
    if (this.fecha2 != ''){
      this.ServicioDestino.getdestinos(this.pcia, this.fecha2).subscribe({
        next : rta => this.lista = rta,
        error: err => console.log(err),
        complete: () => {this.getcomp = true;}
      });
    }else if(this.fechasTodas){
      this.ServicioDestino.getdestinostodos(this.pcia).subscribe({
        next : rta => this.lista = rta,
        error: err => console.log(err),
        complete: () => {this.getcomp = true;}
      });
    }
  }

  travesias = {
    cordoba: [
      { lugar: "Valle de los lisos, Los Gigantes", fecha: "17-11-2023" },
      { lugar: "Los Gigantes", fecha: "19-11-2023" },
      { lugar: "Quebrada del Condorito", fecha: "19-11-2023" },
      { lugar: "Cerro Uritorco", fecha: "19-11-2023" },
      { lugar: "Cerro Champaqui", fecha: "19-11-2023" },
      { lugar: "Pueblo Escondido", fecha: "17-11-2023" },
      { lugar: "Dique de los Alazanes", fecha: "15-11-2023" },
      { lugar: "Quebrada de Yatan", fecha: "15-11-2023" },
      { lugar: "Santuario del Yuspe", fecha: "15-11-2023" },
      { lugar: "Colorados de Copacabana", fecha: "17-11-2023" },
      { lugar: "Salinas GRandes", fecha: "17-11-2023" },
      { lugar: "Ongamira", fecha: "22-11-2023" },
      { lugar: "Volcanes de Pocho", fecha: "22-11-2023" },
      { lugar: "La cumbrecita, Cerro Wonk", fecha: "17-11-2023" },
      { lugar: "La cumbrecita, Rio Subterraneo", fecha: "17-11-2023" },
    ],
    neuquen: [{ lugar: "bariloche", fecha: "17-11-2023" }, { lugar: "cerro catedral", fecha: "17-11-2023" }, { lugar: "lago Nauhel Huapi", fecha: "17-11-2023" }],
    mendoza: [{lugar: "Cerro Aconcagua",  fecha: "17-11-2023"}, {lugar: "laguna de valle hermoso", fecha: "17-11-2023"}]
  }


  selectProv() {
    
    this.travesia = ''
    this.fecha = ''
    if (this.pcia == "cordoba") {
      this.lista = this.travesias[this.pcia]
      return
    }
    if (this.pcia == "neuquen") {
      this.lista = this.travesias[this.pcia]
      return
    }
    if (this.pcia == "mendoza") {
      this.lista = this.travesias[this.pcia]
      return
    }
    
  }
  toggle_form_lista(destino_id : string, nombre_des : string){
    this.verform = !this.verform
    this.verlista = !this.verlista
    if (destino_id != ''){
      this.ServicioDestino.getdetallesdestino(destino_id).subscribe({
        next : rta => {this.listaDetalles = rta; this.listaDetalles.forEach((elemento)=> {elemento.fecha = new Date(elemento.fecha).toLocaleDateString()})},
        error: err => console.log(err),
        complete: () => {this.getcomp = true;}
      });
      this.nom_dest = nombre_des;
    }
  }

  toggle_lista_deta(id_deta: number){
    this.verlista = !this.verlista;
    this.verdeta =  !this.verdeta;
    this.muestraDetalle = this.listaDetalles[id_deta];
  }

  toggle_inico(){
    this.verdeta =  !this.verdeta
    this.verform = !this.verform
  }

  ir_guia(){
    this.mensajeModal = 'Para poder ver los datos del guía, debes estar registrado como usuario válido ...';
    this.tituloModal = 'Debes ingresar al Sistema !';
    this.ServicioLoginNext.enviarSiguienteLogin('guia');
  }

  apuntar(){
    this.mensajeModal = 'Para poder apuntarte, debes estar registrado como usuario válido ...'
    this.tituloModal = 'Debes ser autorizado !'
    this.ServicioLoginNext.enviarSiguienteLogin('recorrido');
  }


  buscar_travesia() {
    if (this.travesia.length > 3 && this.travesia.length < 9) {
      console.log(this.travesia.length + ' ' + this.pcia)
    }
  }
}
