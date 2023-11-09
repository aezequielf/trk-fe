import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destinos'
})
export class DestinosPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): any {
    const resultado = [];
    if (args[0] === '' || args[0].length < 3) return value;
    for (const destino of value){
      if (destino.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) > -1){
        resultado.push(destino);
      }
    }
    return resultado;
  }

}
