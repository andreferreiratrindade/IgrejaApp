import { User } from 'firebase';

export class Config {    

    private static usuario: any;
    public static adicionaUsuario(u:any){
        this.usuario = u;
    }

    public static recuperaUsuario():any{
        return this.usuario!= null ? this.usuario : null;
    }
}

