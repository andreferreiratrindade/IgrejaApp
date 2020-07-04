import { User } from 'firebase';

export class Config {    

    private static _user: User;
    public static set user(u: User) {

        this._user = u
    };

    public static get user(): User {
        return this._user;
    }

    public static getUserId(){
        return this._user!= null ? this._user.uid : null;
    }

    public static loginAtivo(){
       return this._user != null;
    }
}

