import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Travesia } from 'src/app/models/interfaces-travesia';
import { TravesiaServicioService } from 'src/app/services/travesia-servicio.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.component.html',
  styleUrls: ['./recorrido.component.css']
})
export class RecorridoComponent implements OnInit {
  miusuario: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    esguia: false,
    creado: '',
    empresa: null,
    cel: null,
    celalt: null,
    validacion: null
  };
  travesia: Travesia = {
    id: '',
    destino_id: '',
    dificultad: '',
    lugar: '',
    pcia: '',
    pcia_id: '',
    fecha: '',
    hora: '',
    guia_id: '',
    empresa: '',
    pencuentro: '',
    coordenadas: '',
    desc: '',
    ingreso: false,
    detingreso: '',
    traslado: false,
    dettraslado: '',
    desayuno: false,
    rmarcha: false,
    merienda: false,
    detpension: '',
    pernocte: false,
    detpernocte: '',
    botiquin: false,
    detbotiquin: '',
    csatelital: false,
    cvhf: false,
    detcomunicaciones: '',
    rfoto: false,
    detfoto: '',
    scarga: false,
    detcarga: '',
    imontania: false,
    detindumentaria: '',
    cequipaje: false,
    detcuidado: '',
    precio: 0
  }; 
  recorridoId!: string;

  constructor( private route : ActivatedRoute, private srvctrv : TravesiaServicioService, private servicioUsuario : UsuarioService, private enrutar : Router) { }

  ngOnInit(): void {
    this.servicioUsuario.usuarioActual().subscribe({
      next: rta => { this.servicioUsuario.estadoUsuarioActual.set(rta), this.miusuario = rta; },
 //     error: err => this.enrutar.navigate(['/login'])
    })
    this.route.paramMap.subscribe(params => {
      this.recorridoId = params.get('recorridoid') || '';
    });
    this.srvctrv.listaUnaTravesia(this.recorridoId).subscribe({
      next: data => this.travesia = data,
      error: error => console.error('Ocurrio un error!', error)
    });
  }

  registrarse(){
    if (this.servicioUsuario.estadoUsuarioActual()){
        console.log('yo soy: ', this.miusuario.nombre, this.miusuario.apellido, this.miusuario.email, this.miusuario.id);
        console.log('me registro en recorrido: ', this.travesia.id, this.travesia.destino_id, this.travesia.fecha, this.travesia.hora, this.travesia.lugar);
    }else{
      console.log('no estoy logueado, no puedo registrarme en recorrido');
      this.enrutar.navigate(['/login'])
    }

      }

}
