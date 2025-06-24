import { Component, OnInit, effect } from '@angular/core';
import { Pcia } from 'src/app/models/pcia';
import { PciaServicioService } from 'src/app/services/pcia-servicio.service';
import { TravesiaServicioService } from 'src/app/services/travesia-servicio.service';
import { ServicioLoginNextService } from 'src/app/services/servicio-login-next.service';
import { Travesia } from 'src/app/models/interfaces-travesia';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, RouterLink } from '@angular/router';

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
    listaPcia : Pcia[] = [];
    verform = true;
    verlista = false;
    verdeta = false;
    getcomp = false;
    mensajeModal = '';
    tituloModal = '';
    pcia: string = '0';
    travesia: string = '';
    lista: Travesia[] = [];
    listaDetalles: Travesia[] = [];
    muestraDetalle!: Travesia;
    fechafull: Date = new Date()
    //fecha: string = this.fechafull.getFullYear()+'-'+(this.fechafull.getMonth()+1)+'-'+this.fechafull.getDate()
    fecha: string = '';
    fecha2: string = '';
    fechaTmp = '';
    fechasTodas = false;
    nom_dest = '';
    tempo? : string | null;
    nombre: string = '';
    
    constructor (private router: Router, private ServicioLoginNext : ServicioLoginNextService, private servicioPcia : PciaServicioService, private ServicioTRavesia : TravesiaServicioService, private servUsuario: UsuarioService){
    }
    ngOnInit(): void {
        let estado: any;
        estado = this.ServicioLoginNext.getData();
        
        if (estado) {
          this.deserializeState(estado);
          this.ServicioLoginNext.clearData();
        }
        
        
        // if (this.servUsuario.estadoUsuarioActual())
        //   this.nombre = this.servUsuario.estadoUsuarioActual()!.nombre
        this.obtenerPcias();
      }
    // funcion effect para observar cambios en singal estadoUsuarioActual
     efecto = effect( ()=>
      {
        const nuevoValor = this.servUsuario.estadoUsuarioActual();
        this.nombre = nuevoValor?.nombre || '';
      }
      
    )

  serializeState(): any {
    return {
      listaPcia: this.listaPcia,
      verform: this.verform,
      verlista: this.verlista,
      verdeta: this.verdeta,
      getcomp: this.getcomp,
      mensajeModal: this.mensajeModal,
      tituloModal: this.tituloModal,
      pcia: this.pcia,
      travesia: this.travesia,
      lista: this.lista,
      listaDetalles: this.listaDetalles,
      muestraDetalle: this.muestraDetalle,
      fechafull: this.fechafull,
      fecha: this.fecha,
      fecha2: this.fecha2,
      fechaTmp: this.fechaTmp,
      fechasTodas: this.fechasTodas,
      nom_dest: this.nom_dest,
      tempo: this.tempo
    };
  }
  
  // Método para deserializar el estado de un objeto y restaurar el estado de la clase
  deserializeState(state: any): void {
    this.listaPcia = state.listaPcia;
    this.verform = state.verform;
    this.verlista = state.verlista;
    this.verdeta = state.verdeta;
    this.getcomp = state.getcomp;
    this.mensajeModal = state.mensajeModal;
    this.tituloModal = state.tituloModal;
    this.pcia = state.pcia;
    this.travesia = state.travesia;
    this.lista = state.lista;
    this.listaDetalles = state.listaDetalles;
    this.muestraDetalle = state.muestraDetalle;
    this.fechafull = new Date(state.fechafull);
    this.fecha = state.fecha;
    this.fecha2 = state.fecha2;
    this.fechaTmp = state.fechaTmp;
    this.fechasTodas = state.fechasTodas;
    this.nom_dest = state.nom_dest;
    this.tempo = state.tempo;
  }

  muestra(){
 // Guardar el estado
  const savedState = this.serializeState();
  console.log(savedState);
  }
  

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
      this.fecha2 = this.fechaTmp;
      this.obtenerDestinos();
    }else{
      this.fechaTmp= this.fecha2;
      this.fecha2 = '';
      this.fechasTodas = true;
      this.obtenerDestinos();
    }
  }
  

  obtenerDestinos(fecha?: string){
    if (fecha !== undefined){
      this.fechasTodas = false;
      this.fecha2 = fecha;
    }
    if (this.fecha2 != ''){
      this.fechasTodas = false;
    }
    if (this.fechasTodas ){
      this.ServicioTRavesia.listarTravesiasPciaTodas(this.pcia).subscribe({
        next : rta => this.lista = rta,
        error: err => console.log(err),
        complete: () => {this.getcomp = true;}
      });
    }else if(this.fecha2 === ''){
      this.getcomp = true;
      this.lista =[];
    }else{
      this.ServicioTRavesia.listarTravesiasPciaFecha(this.pcia,this.fecha2).subscribe({
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
      this.ServicioTRavesia.listarTravesiasPciaFecha(this.pcia, this.fecha2).subscribe({
        next : rta => this.lista = rta,
        error: err => console.log(err),
        complete: () => {this.getcomp = true;}
      });
    }else if(this.fechasTodas){
      this.ServicioTRavesia.listarTravesiasPciaTodas(this.pcia).subscribe({
        next : rta => this.lista = rta,
        error: err => console.log(err),
        complete: () => {this.getcomp = true;}
      });
    }
    this.travesia='';
  }


  toggle_form_lista(destino_id : string, nombre_des : string){
    this.verform = !this.verform
    this.verlista = !this.verlista
    if (destino_id != ''){
      this.ServicioTRavesia.listarTRavesiaxDestino(destino_id).subscribe({
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
    if (this.servUsuario.estadoUsuarioActual()){
     this.router.navigate(['/guia', this.muestraDetalle?.guia_id]);
    }

     this.mensajeModal = 'Para poder ver los datos del guía, debes estar registrado como usuario válido ...';
    this.tituloModal = 'Debes ingresar al Sistema !';
    this.ServicioLoginNext.enviarSiguienteLogin('guia', this.muestraDetalle?.guia_id);
    const savedState = this.serializeState();
    this.ServicioLoginNext.setData(savedState);
    
  }

  apuntar(){
    this.ServicioLoginNext.enviarSiguienteLogin('recorrido', this.muestraDetalle?.id);
    const savedState = this.serializeState();
    this.ServicioLoginNext.setData(savedState);
    this.router.navigate(['/recorrido', this.muestraDetalle?.id]);
  }
  
  cancelarSiguiente(){
    this.ServicioLoginNext.enviarSiguienteLogin(null, null);
    this.ServicioLoginNext.clearData();

  }


// Restaurar el estado
//  this.deserializeState(savedState);

  // buscar_travesia() {
  //   if (this.travesia.length > 3 && this.travesia.length < 9) {
  //     console.log(this.travesia.length + ' ' + this.pcia)
  //   }
  // }
}
