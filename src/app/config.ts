export class Config {    

   
    public static get apiUrl(): string { return "http://localhost:3000" };

    private static _token: string;

    public static get token(): string {
        return this._token;
    }
    public static set token(v: string) {
        this._token = v;
    }

}

