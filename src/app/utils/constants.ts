export module Constants {

   export class PerfilUsuario {
      public static AdministradorSistema: number = 1;
      public static AdministradorIgreja: number = 2;
      public static Prestador: number = 3;

      public static RecuperaListagem():any[]{
         return [
            {valor:this.AdministradorIgreja,descricao:"Administrador Igreja"},
            {valor:this.AdministradorSistema,descricao:"Administrador Sistema"},
            {valor:this.Prestador,descricao:"Prestador"}

         ]
      }

      public static RecuperaDescricaoPorValor(valor: any): string {
         return this.RecuperaListagem().filter(y => y.valor == valor)[0].descricao;
      }
      
   }

   export class Mensagens {
      public static CamposObrigatorios = "Favor preencher todos os campos obrigatorios sinalizados com *"
   }
   export class ListTipoSituacaoPrestador {
      public static RecuperaListagem(): any[] {
         return [
            { valor: TipoSituacaoPrestador.PrestadorEmEdicao, descricao: "Prestador em Edição" },
            { valor: TipoSituacaoPrestador.PendenteAutorizacao, descricao: "Pendente de Autorização" },
            { valor: TipoSituacaoPrestador.Ativo, descricao: "Ativo" },
            { valor: TipoSituacaoPrestador.Suspenso, descricao: "Suspenso" }
         ];
      }

      public static RecuperaDescricaoPorValor(valor: any): string {
         return this.RecuperaListagem().filter(y => y.valor == valor)[0].descricao;
      }

   }

   export class TipoSituacaoPrestador {
      public static PrestadorEmEdicao : number = 1;
      public static PendenteAutorizacao: number = 2;
      public static Ativo: number = 3;
      public static Suspenso: number = 4;
   }

   export class TipoMinisterio {
      public static louvor: number = 1;
      public static educacao: number = 2;
      public static infantil: number = 3;


   };;

   export class TipoPessoaIgreja {
      public static admin: number = 1;
      public static participante: number = 2;
      public static pendente: number = 3;
      public static naoSolicitado: number = 4;
      public static naoAceito: number = 5
   };

   export class TipoPessoaMinisterio {
      public static admin: number = 7;
      public static adminSecundario: number = 1;
      public static pessoa: number = 2;
      public static pendente: number = 3;
      public static naoSolicitado: number = 4;
      public static naoAceito: number = 5
   };

   export class TipoFuncaoPessoaEquipe {
      public static guitarra: number = 7;
      public static vocal: number = 1;
      public static violao: number = 2;
      public static teclado: number = 3;
      public static dataShow: number = 4;
      public static bateria: number = 5;
      public static baixo: number = 6;
   };

   export class TipoLinkMusica {
      public static youtube: number = 0;
      public static cifra: number = 1;
      public static letra: number = 2;
      public static outro: number = 3
   };

   export class TipoPeriodoMinistracao {
      public static manha: number = 1;
      public static tarde: number = 2;
      public static noite: number = 3
   }

   export class ListagemUF {
      public static RecuperaListagem() {
         return [
            { "nome": "Acre", "sigla": "AC" },
            { "nome": "Alagoas", "sigla": "AL" },
            { "nome": "Amapá", "sigla": "AP" },
            { "nome": "Amazonas", "sigla": "AM" },
            { "nome": "Bahia", "sigla": "BA" },
            { "nome": "Ceará", "sigla": "CE" },
            { "nome": "Distrito Federal", "sigla": "DF" },
            { "nome": "Espírito Santo", "sigla": "ES" },
            { "nome": "Goiás", "sigla": "GO" },
            { "nome": "Maranhão", "sigla": "MA" },
            { "nome": "Mato Grosso", "sigla": "MT" },
            { "nome": "Mato Grosso do Sul", "sigla": "MS" },
            { "nome": "Minas Gerais", "sigla": "MG" },
            { "nome": "Pará", "sigla": "PA" },
            { "nome": "Paraíba", "sigla": "PB" },
            { "nome": "Paraná", "sigla": "PR" },
            { "nome": "Pernambuco", "sigla": "PE" },
            { "nome": "Piauí", "sigla": "PI" },
            { "nome": "Rio de Janeiro", "sigla": "RJ" },
            { "nome": "Rio Grande do Norte", "sigla": "RN" },
            { "nome": "Rio Grande do Sul", "sigla": "RS" },
            { "nome": "Rondônia", "sigla": "RO" },
            { "nome": "Roraima", "sigla": "RR" },
            { "nome": "Santa Catarina", "sigla": "SC" },
            { "nome": "São Paulo", "sigla": "SP" },
            { "nome": "Sergipe", "sigla": "SE" },
            { "nome": "Tocantins", "sigla": "TO" }
         ]
      }

      public static RecuperaObjetoPorUF(uf: string): any {
         return this.RecuperaListagem().filter(y => y.sigla == uf)[0];
      }

      public static RecuperaDescricaoPorUF(uf: string): any {
         let obj = this.RecuperaObjetoPorUF(uf);
         return obj.nome + " / " + obj.sigla;
      }
   }

}