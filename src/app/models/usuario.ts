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