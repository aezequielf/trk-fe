import { Component, Injectable, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbDatepickerI18n, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { TravesiaServicioService } from 'src/app/services/travesia-servicio.service';


const I18N_VALUES = {
  es: {
    weekdays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  }
};

type misFechas = { _id : string};

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

	getWeekdayLabel(weekday: number): string {
		return I18N_VALUES.es.weekdays[weekday - 1];
	}
	getMonthShortName(month: number): string {
		return I18N_VALUES.es.months[month - 1];
	}
	getMonthFullName(month: number): string {
		return this.getMonthShortName(month);
	}
	getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.day}-${date.month}-${date.year}`;
	}
}

@Component({
  selector: 'app-selec-fecha',
  standalone: true,
  templateUrl: './selec-fecha.component.html',
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
  styleUrls: ['./selec-fecha.component.css'],
  providers: [ { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
})
export class NgbdDatepickerI18n implements OnChanges{
  model!: NgbDateStruct;  
  desde: NgbDateStruct;
  fechasDisponibles!: NgbDateStruct[];
  isDisabled:  any | boolean ;
  inicial = true;
  @Input() pcia_id: string = "";
  @Output() emitoFecha = new EventEmitter<string>();
  fechas: misFechas[] = [];

  constructor(private calendario: NgbCalendar,  private ServTravFech : TravesiaServicioService){
    this.desde = calendario.getToday();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.pcia_id == '0'){
      this.isDisabled = false;
      this.inicial= true;
    }else if (changes['pcia_id'] ){
      this.inicial= false;
      this.ServTravFech.listaTravesiasFecha(this.pcia_id).subscribe({
        next: rta => this.fechas = rta,
        error: err => console.log(err),
        complete: () => {
                        this.fechasDisponibles = [];
                        this.fechas.forEach(elemento => {let [yearStr, monthStr, dayStr] = elemento._id.split('-');
                        this.fechasDisponibles.push({ year: parseInt(yearStr), month: parseInt(monthStr), day :parseInt(dayStr)});});
                        // if (this.pcia_id == '656e59c935a4cd190c93b4b7'){
                        //   this.fechasDisponibles = [
                        //     { year: 2024, month: 3, day:  11},
                        //     { year: 2024, month: 3, day:  14},
                        //     { year: 2024, month: 3, day:  18},
                        //     { year: 2024, month: 3, day: 19 },
                        //   ];
                        // }else{
                        //   this.fechasDisponibles = [
                        //     { year: 2024, month: 3, day: 20},
                        //     { year: 2024, month: 3, day:  21},
                        //     { year: 2024, month: 3, day:  22},
                        //     { year: 2024, month: 3, day:25},
                        //   ];
                        // }
                        this.isDisabled = (date: NgbDate): boolean => {
                          return !this.fechasDisponibles.some((fechaDisponible) => {
                            return this.isSameDate(date, fechaDisponible);
                          });
                        };
                        }
      });
    
    // this.isDisabled = (date: NgbDate): boolean => {
    //   return !this.fechasDisponibles.some((fechaDisponible) => {
    //     return this.isSameDate(date, fechaDisponible);
    //   });
    // };
    }

  }
  
  logModelValue() {
    // esta es la funcion que emite el valor de fecha2
    try {
      const dateString: Date = new Date(this.model.year, this.model.month - 1, this.model.day);
      const year = dateString.getFullYear(); // Obtiene el año
      const month = String(dateString.getMonth() + 1).padStart(2, '0'); // Obtiene el mes (añade +1 porque los meses en JavaScript son base 0)
      const day = String(dateString.getDate()).padStart(2, '0'); // Obtiene el día
      if( day != 'NaN' && month != 'NaN' && year > 2020 ){
        this.emitoFecha.emit(`${year}-${month}-${day}`);
      }
    }catch (error) {
      // solo para manegar el erro
    }
  }

  isSameDate(date1: NgbDateStruct, date2: NgbDateStruct): boolean {
    return (
      date1.year === date2.year &&
      date1.month === date2.month &&
      date1.day === date2.day
    );
  }

}