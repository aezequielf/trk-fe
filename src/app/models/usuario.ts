export class Persona{
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    pass: string;

    constructor(id: string, nombre: string, apellido: string, email: string, pass: string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.pass = pass;
    }

}