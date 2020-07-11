import { Injectable } from '@angular/core';
import { BaseRepository } from '../repository-interface/Repository-Base';
import { Constants } from 'src/app/utils/constants';

@Injectable({
    providedIn: 'root'
})
export class PrestadorRepServiceService extends BaseRepository {
    recuperaPrestadoresPorIgreja(igrejaId: any) :Promise<any[]>{
        return new Promise<any[]>((retorno, reject) => {
                this.db.collectionGroup("prestador")
                .where("igrejas", "array-contains",igrejaId)
                .get().then(result => {
                    let lst = [];
                    result.forEach(function (doc) {
                        lst.push(doc.data());
                    });
                    retorno(lst);
                }).catch(err => {
                    reject(err);
                });
        });
    }
    
    ExcluirServico(usuarioId: any, servicoId: any): Promise<any> {
        return new Promise<any>((retorno, reject) => {

        return this.db.collection("usuario").doc(usuarioId)
            .collection("prestador").doc(usuarioId)
            .collection("servico").doc(servicoId)
            .delete().then((result) => {
                retorno(result);
            }).catch(err => {
                reject(err);
            });
    });
}

    AtualizaPrestador(usuarioId: string, item: any): Promise<any> {

        return new Promise<any>((retorno, reject) => {
            this.db.collection("usuario").doc(usuarioId)
                .collection("prestador").doc(usuarioId)
                .update(item).then((result) => {
                    retorno(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    AdicionaServicoAoPrestador(usuarioId: any, servico: any): Promise<any> {
        return new Promise<any>((retorno, reject) => {

            return this.db.collection("usuario").doc(usuarioId)
                .collection("prestador").doc(usuarioId)
                .collection("servico").doc(servico.servicoId)
                .set({ ...servico }, { merge: true }).then((result) => {
                    retorno(result);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    RecuperaPrestador(usuarioId: string): Promise<any> {
        return new Promise<any>((retorno, reject) => {
            this.db.collection("usuario").doc(usuarioId)
                .collection("prestador")
                .doc(usuarioId)
                .get().then((result) => {
                    retorno(result.data());
                }).catch(err => {
                    reject(err);
                });
        });
    }

    
    recuperaServicosPorPrestadores(usuarios: any[]): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.db.collectionGroup("servico")
                .where("usuarioId", "in",usuarios)
                .get().then(result => {
                    let lst = [];
                    result.forEach(function (doc) {
                        lst.push(doc.data());
                    });
                    resolve(lst);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    recuperaServicosPorPrestador(usuarioId: any): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.db.collection("usuario").doc(usuarioId).collection("prestador")
                .doc(usuarioId)
                .collection("servico")
                .get().then(result => {
                    let lst = [];
                    result.forEach(function (doc) {
                        lst.push(doc.data());
                    });
                    resolve(lst)
                }).catch(err => {
                    reject(err);
                });
        });
    }

    RecuperaPestadoresPorCidadeEhUFEhServico(ufSelecionado: string, cidadeSelecionado: string, servicoId:string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            var query = this.db.collectionGroup("prestador")
                .where("situacaoPrestador", "==", Constants.TipoSituacaoPrestador.PendenteAutorizacao)
                .where("uf", "==", ufSelecionado)
            if (cidadeSelecionado) {
                query.where("cidade", "==", cidadeSelecionado)
            }
            if (servicoId) {
                query.firestore.collectionGroup("servico").where("servicoId", "==", servicoId)
            }
            query.get().then(result => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst)
            }).catch(err => {
                reject(err);
            });
        });
    }

    RecuperaCidadePrestadorDisponiveis(ufSelecionado: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.db.collectionGroup("prestador")
                .where("uf", "==", ufSelecionado)
                .where("situacaoPrestador", "==", Constants.TipoSituacaoPrestador.PendenteAutorizacao)
                .get().then(result => {

                    let lst = [];
                    result.forEach(function (doc) {
                        if (!lst.includes(doc.data().cidade)) {
                            lst.push(doc.data().cidade);
                        }
                    });
                    resolve(lst)
                }).catch(err => {
                    reject(err);
                });
        });
    }

    recuperaUfPrestadorDisponiveis(): Promise<any[]> {

        return new Promise((resolve, reject) => {
            this.db.collectionGroup("prestador")
                .where("situacaoPrestador", "==", Constants.TipoSituacaoPrestador.PendenteAutorizacao)
                .get().then(result => {
                    let lst = [];
                    result.forEach(function (doc) {
                        if (!lst.includes(doc.data().uf)) {
                            lst.push(doc.data().uf);
                        }
                    });
                    resolve(lst)
                }).catch(err => {
                    reject(err);
                });
        });
    }

    AdicionaPrestador(prestador: any): Promise<any> {
        console.log(prestador);
        return new Promise((resolve, reject) => {

            this.db.collection("usuario").doc(prestador.usuarioId)
                .collection("prestador").doc(prestador.usuarioId)
                .set({ ...prestador }).then((obj) => {
                    resolve(obj);
                }).catch(err => {
                    reject(err);
                });
        });
    }
}
