import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destinos'
})
export class DestinosPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any {
    const [lugarfiltro, fecha] = args
    const [anio, mes, dia] = fecha.split('-')
    const resultado = [];
    if (value == null) return value;  
    if (fecha == ''){
      if (lugarfiltro === '' || lugarfiltro.length < 3) return value;
      for (const destino of value){
        if (destino._id.toLocaleLowerCase().indexOf(lugarfiltro.toLocaleLowerCase()) > -1 ){
          resultado.push(destino);
        }
      }
      return resultado
    }
    if (lugarfiltro === '' || lugarfiltro.length < 3){
      for (const destino of value){
        if (destino.fecha == dia+'-'+mes+'-'+anio){
          resultado.push(destino);
        }
      }
      return resultado;
    };
    for (const destino of value){
      if (destino.lugar.toLocaleLowerCase().indexOf(lugarfiltro.toLocaleLowerCase()) > -1 && destino.fecha == dia+'-'+mes+'-'+anio){
        resultado.push(destino);
      }
    }
    return resultado;
  }

}
