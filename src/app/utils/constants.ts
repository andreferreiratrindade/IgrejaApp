export module Constants{

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
      public static Form1 = 0;
      public static Form2 = 1;
      public static Form3 = 2;
      public static PendenteAutorizacao = 3;
      public static Ativo = 4;
      public static Suspenso = 5;
      public static Cancelado = 6;
      
   }

   export class TipoMinisterio{
       public static louvor = 1;
       public static educacao= 2;
       public static infantil = 3;


    };;

    export class TipoPessoaIgreja {
        public static admin= 1;
        public static participante= 2;
        public static pendente= 3;
        public static naoSolicitado= 4;
        public static naoAceito = 5
    };

    export class TipoPessoaMinisterio {
       public static admin= 7;
       public static adminSecundario= 1;
       public static pessoa= 2;
       public static pendente= 3;
       public static naoSolicitado= 4;
       public static naoAceito = 5
    };

    export class TipoFuncaoPessoaEquipe{
       public static guitarra= 7;
       public static vocal= 1;
       public static violao= 2;
       public static teclado= 3;
       public static dataShow = 4;
       public static bateria= 5;
       public static baixo=6;
    };

    export class TipoLinkMusica{
      public static youtube= 0;
      public static cifra=1;
      public static letra=2;
      public static outro=3
    };

    export class TipoPeriodoMinistracao{
       public static manha=1;
       public static tarde=2;
       public static noite=3
    }

}