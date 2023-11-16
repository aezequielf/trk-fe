import { Component, OnInit } from '@angular/core';

export interface Lugar{
  lugar : string[],
  fecha: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  verform = true
  pcia: string = '';
  travesia: string = '';
  lista: object[] = [];
  fechafull: Date = new Date()
  //fecha: string = this.fechafull.getFullYear()+'-'+(this.fechafull.getMonth()+1)+'-'+this.fechafull.getDate()
  fecha: string = ''
  
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
  oculta(){
    this.verform = !this.verform
  }

  buscar_travesia() {
    if (this.travesia.length > 3 && this.travesia.length < 9) {
      console.log(this.travesia.length + ' ' + this.pcia)
    }
  }
}
