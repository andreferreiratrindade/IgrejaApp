export module Constants{

   export class PerfilUsuario {
         public static AdministradorSistema:number  = 1;
         public static AdministradorIgreja : number = 2;
   }

   export class Mensagens{
      public static CamposObrigatorios = "Favor preencher todos os campos obrigatorios sinalizados com *"
   }
   export class ListTipoSituacaoPrestador{
      public static RecuperaListagem():any[]{
         return [ 
            {valor:TipoSituacaoPrestador.Form1,descricao:"Informações Iniciais" },
            {valor:TipoSituacaoPrestador.Form2,descricao:"Serviços" },
            {valor:TipoSituacaoPrestador.Form3,descricao:"Confirmar Dados" },
            {valor:TipoSituacaoPrestador.PendenteAutorizacao,descricao:"Pendente de Autorização" },
            {valor:TipoSituacaoPrestador.Ativo,descricao:"Ativo" },
            {valor:TipoSituacaoPrestador.Suspenso,descricao:"Suspenso" }
         ];
      }

      public static RecuperaDescricaoPorValor(valor:any):string {
         return  this.RecuperaListagem().filter(y=> y.valor == valor)[0].descricao;
      }

   }

   export class TipoSituacaoPrestador{
      public static Form1:number= 0;
      public static Form2:number= 1;
      public static Form3:number= 2;
      public static PendenteAutorizacao:number = 3;
      public static Ativo:number = 4;
      public static Suspenso:number = 5;
      public static Cancelado :number= 6;
      
   }

   export class TipoMinisterio{
       public static louvor:number = 1;
       public static educacao:number= 2;
       public static infantil:number = 3;


    };;

    export class TipoPessoaIgreja {
        public static admin:number= 1;
        public static participante:number= 2;
        public static pendente:number= 3;
        public static naoSolicitado:number= 4;
        public static naoAceito:number = 5
    };

    export class TipoPessoaMinisterio {
       public static admin:number= 7;
       public static adminSecundario:number= 1;
       public static pessoa:number= 2;
       public static pendente:number= 3;
       public static naoSolicitado:number= 4;
       public static naoAceito:number = 5
    };

    export class TipoFuncaoPessoaEquipe{
       public static guitarra:number= 7;
       public static vocal:number= 1;
       public static violao:number= 2;
       public static teclado:number= 3;
       public static dataShow:number = 4;
       public static bateria:number= 5;
       public static baixo:number=6;
    };

    export class TipoLinkMusica{
      public static youtube:number= 0;
      public static cifra:number=1;
      public static letra:number=2;
      public static outro:number=3
    };

    export class TipoPeriodoMinistracao{
       public static manha:number=1;
       public static tarde:number=2;
       public static noite:number=3
    }

}