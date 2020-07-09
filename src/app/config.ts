import { User } from 'firebase';

export  class  Config {    

    private static instance: Config;
    protected usuario:any;
    public  adicionaUsuario(u:any){
        
        this.usuario = u;
    }

    public static RecuperaInstancia():any{
        if(!Config.instance){
            Config.instance = new Config();
        }

       return Config.instance;
    }

    public recuperaUsuario(){

        return this.usuario;
    }

}

