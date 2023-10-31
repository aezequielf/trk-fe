import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  travesia : string = '';
  pcia: string = '0';
  cordoba : string[];
  mendoza : string[];
  neuquen : string[];

  constructor(){
    this.cordoba = ['travesia cordoba 1','travesia cordoba 2','travesia cordoba 3','travesia cordoba 4'];
    this.neuquen = ['travesia neuquen 1','travesia neuquen 2','travesia neuquen 3','travesia neuquen 4'];
    this.mendoza = ['travesia mendoza 1','travesia mendoza 2','travesia mendoza 3','travesia mendoza 4']
  }

  buscar_travesia(){
    if (this.travesia.length > 3 && this.travesia.length < 9){
      console.log(this.travesia.length+' '+this.pcia)
    }
  }
}
