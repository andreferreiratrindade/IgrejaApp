import { Injectable } from '@angular/core';
import { BaseRepository } from '../repository-interface/Repository-Base';

@Injectable({
    providedIn: 'root'
})
export class DominioServicoRepositoryService extends BaseRepository {

    /**
     *
     */
    constructor() {
        super();
        this._collectionName = "dominioServico";
    }

    servicoConverter = {

        toFirestore:function(servico){
            return {servicoId : servico.servicoId,
            nomeServico:servico.nomeServico}
        }

    }
    recuperaServicoAutoComplete(query: string): Promise<any> {

        return new Promise<any>((response, resp) => {
            query = query.toLowerCase()
            const endText = query + '\uf8ff'; 
            this.db.collection("dominioServico")
                .orderBy("nomeServico_insensitive")
                .limit(10)
                .startAt(query)
                .endAt(endText)
         
                // .where("nomeServico",">=",query)
                // .where("nomeServico","<=",endText)
                // .startAt(query)
                // .endAt(endText)
                .get()
                .then((result) => {
                    let lst = [];
                    result.forEach(function (doc) {

                        lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id });
                    })
                    response(lst);
                })
                .catch((err) => {
                    resp(err);
                });
        });
    }


    recuperaDominioServico(): Promise<any> {
        return new Promise<any>((response, resp) => {
            this.db.collection("dominioServico").orderBy("nomeServico").get()
            .then((result) => {

                let lst = [];
                result.forEach(function (doc) {

                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id, deletado:doc.data().deletado });
                })
                response(lst);
            })
        });
    }

    recuperaDominioServicoAtivo(): Promise<any> {
        return new Promise<any>((response, resp) => {
            this.db.collection("dominioServico")
            .where("deletado","==",false)
            .orderBy("nomeServico")
            .get()
            .then((result) => {

                let lst = [];
                result.forEach(function (doc) {

                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id, deletado:doc.data().deletado });
                })
                response(lst);
            })
        });
    }
}
