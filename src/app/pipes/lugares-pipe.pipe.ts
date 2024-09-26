import { Pipe, PipeTransform } from '@angular/core';
import { Destino, Pcia } from '../models/pcia';

@Pipe({
  name: 'lugaresPipe'
})
export class LugaresPipePipe implements PipeTransform {

  transform(value: Pcia[], ...args: string[]): Pcia[]{
    const [lugarfiltro] = args;
    const resultado: Pcia[] =[];
    if (lugarfiltro === '' || lugarfiltro.length < 4) return value;
    for (const destino of value){
      if (destino.destinos!.lugar.toLocaleLowerCase().indexOf(lugarfiltro.toLocaleLowerCase()) > -1 ){
        resultado.push(destino);
      }
    }
    return resultado;
  }

}
