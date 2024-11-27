export class Persona{
    id?: string;
    nombre: string;
    apellido: string;
    email: string;
    clave: string;

    constructor(id: string, nombre: string, apellido: string, email: string, clave: string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.clave = clave;
    }

}


export class Credenciales{
    email: string;
    clave: string;
    constructor(email: string, clave: string){
        this.email = email;
        this.clave = clave;
    }

}

export interface Usuario{
    id: string,
    nombre: string,
    apellido: string,
    email: string,
    esguia: boolean,
    creado: string,
    empresa: string | null,
    cel: string | null,
    celalt: string | null,
    validacion: string | null
}
