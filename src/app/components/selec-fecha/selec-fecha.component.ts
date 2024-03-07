import { Component, Injectable, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbDatepickerI18n, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

const I18N_VALUES = {
  es: {
    weekdays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  }
};

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
  isDisabled:  any | boolean = false;
  @Input() pcia_id?: string;
  

  constructor(private calendario: NgbCalendar){
    this.desde = calendario.getToday();
    console.log('Valor inicial de pcia_id',this.pcia_id);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.pcia_id == '0'){
      this.isDisabled = false;
    }else if (changes['pcia_id'] ){
    console.log(this.pcia_id);
    if (this.pcia_id == '656e59c935a4cd190c93b4b7'){
      this.fechasDisponibles = [
        { year: 2024, month: 3, day:  11},
        { year: 2024, month: 3, day:  14},
        { year: 2024, month: 3, day:  18},
        { year: 2024, month: 3, day: 19 },
      ];
    }else{
      this.fechasDisponibles = [
        { year: 2024, month: 3, day: 20},
        { year: 2024, month: 3, day:  21},
        { year: 2024, month: 3, day:  22},
        { year: 2024, month: 3, day:25},
      ];
    }

    this.isDisabled = (date: NgbDate): boolean => {
      return !this.fechasDisponibles.some((fechaDisponible) => {
        return this.isSameDate(date, fechaDisponible);
      });
    };
    }

  }
  
  logModelValue() {
    // esta es la funcion que emite el valor de fecha2
    const dateString: string = new Date(this.model.year, this.model.month - 1, this.model.day).toLocaleDateString();
  }

  isSameDate(date1: NgbDateStruct, date2: NgbDateStruct): boolean {
    return (
      date1.year === date2.year &&
      date1.month === date2.month &&
      date1.day === date2.day
    );
  }

}
