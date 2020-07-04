export class IgrejaEntity{
    nomeIgreja:string = "";
    cep:string= "";
    uf:string= "";
    cidade:string= "";
    bairro:string= "";
    logradouro : string= "";

    RecuperaEnderecoCompleto(){
        return  this.logradouro + ", " + this.bairro+ " - " +this.cidade + "/" +this.uf + " - " + this.cep;
    }

}