import { Component, Injectable } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbDatepickerI18n, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
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
export class NgbdDatepickerI18n {
  model!: NgbDateStruct;  
  desde: NgbDateStruct;
  constructor(private calendario: NgbCalendar){
    this.desde = calendario.getToday();
  }
  logModelValue() {
    // esta es la funcion que emite el valor de fecha2
    const dateString: string = new Date(this.model.year, this.model.month - 1, this.model.day).toLocaleDateString();
    console.log(dateString);
  }

}
