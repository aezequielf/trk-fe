import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  pcia: string = '';
  travesia : string = '';
  lista : string[] = [];
  
  travesias = {
    "cordoba": ["lago cordoba", "cerro cordoba", "cascada cordoba", "montaña cordoba"],
    "neuquen": ["lago neuquen", "cerro neuquen", "cascada neuquen", "montaña neuquen"],
    "mendoza": ["lago mendoza", "cerro mendoza", "cascada mendoza", "montaña mendoza"]
  }
  

  selectProv(){ 
    if (this.pcia == "cordoba"){
      this.lista = this.travesias[this.pcia]
      return
    } 
    if (this.pcia == "neuquen"){
      this.lista = this.travesias[this.pcia]
      return
    } 
    if (this.pcia == "mendoza"){
      this.lista = this.travesias[this.pcia]
      return
    } 
  }
  

  buscar_travesia(){
    if (this.travesia.length > 3 && this.travesia.length < 9){
      console.log(this.travesia.length+' '+this.pcia)
    }
  }
}
