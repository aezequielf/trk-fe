import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { InterfaceGuia } from 'src/app/models/interface-guia';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  standalone: true,
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css'],
  imports: [
    RouterModule,
    CommonModule
  ],
})
export class GuiaComponent implements OnInit {

  guiaId!: string;
  unGuia: InterfaceGuia = {
    id: '',
    esguia: false,
    empresa: '',
    cel: '',
    celalt: '',
    validacion: []
  };

  constructor(private route: ActivatedRoute, private srvusr : UsuarioService) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.guiaId = params.get('guiaid') || '';
      })
      if(this.guiaId != ''){
        this.srvusr.datosGuia(this.guiaId).subscribe({
          next: data => this.unGuia = data,
          error: error => console.log('Error al obtener datos del guia: '+error)
        });
      }else{
        console.log('No se recibió el id del guia');
      }
  }
}