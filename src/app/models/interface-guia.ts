export interface InterfaceGuia {
        id: string;
        esguia: boolean;
        empresa : string;
        cel : string;
        celalt : string ;
        validacion: Validacion[];
}
export interface DatosValidar {
        email : string;
        resolucion: string;
        provincia: string;
}

export interface Validacion {
        provincia: string;
        token: string;
        validado: boolean;
        resolucion: string;
}