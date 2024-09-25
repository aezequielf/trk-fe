export class Destino{
    id: string | null = null;
    lugar: string;
    area: string;

    constructor(lugar: string, area: string){
        this.lugar = lugar;
        this.area = area;
    }
}

export class Pcia{
    id: string;
    nombre: string;
    destinos:  Destino | null = null   ;


    constructor(id: string, nombre: string, ){
        this.id = id;
        this.nombre = nombre;
    }

}

export class DetalleDetino{
    id: string;
    destino_id : string ;
    lugar: string;
    pcia: string;
    pcia_id: string;
    fecha: string;
    hora: string;
    guia_id: string;
    empresa: string;
    desc: string;

    constructor(id: string, destino_id: string, empresa: string,lugar: string, pcia: string, pcia_id: string, fecha: string, hora: string, guia_id: string, desc: string){
        this.id = id;
        this.destino_id = destino_id;
        this.lugar = lugar;
        this.pcia = pcia;
        this.pcia_id = pcia;
        this.fecha = fecha;
        this.hora = hora;
        this.guia_id = guia_id;
        this.empresa = empresa;
        this.desc = desc;
    }
}