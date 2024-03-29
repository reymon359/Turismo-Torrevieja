
export interface UsuarioInterface
{
    identificador:number;
    nombreUsuario:string;
    apodo:string;
    correo:string;
    password:string;
    password_confirmation:string;
    esVerificado:number;
    //key$?:string; identificador es la key
    rol:number;
    fechaActualizacion:string;
    fechaCreacion:string;
    fechaEliminacion:string;
    activo:string;
    observaciones:string;
}
