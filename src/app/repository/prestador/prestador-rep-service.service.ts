import { Injectable } from '@angular/core';
import { BaseRepository } from '../repository-interface/Repository-Base';
import { Constants } from 'src/app/utils/constants';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class PrestadorRepServiceService extends BaseRepository {
    recuperaPrestadoresPorIgreja(igrejaId: any): Promise<any[]> {
        return new Promise<any[]>((retorno, reject) => {
            this.db.collectionGroup("prestador")
                .where("igrejas", "array-contains", igrejaId)
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
        let ref = this.db.collection("usuario").doc(usuarioId)
            .collection("prestador").doc(usuarioId)

        return new Promise<any>((retorno, reject) => {
            this.db.runTransaction(transaction => {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(ref).then(doc => {
                    let servicos = []
                    servicos = doc.data().servicos;
                    servicos = servicos.filter(y => { return y.servicoId != servicoId });
                    transaction.update(ref, { servicos: servicos });
                });
            }).then(function () {
                retorno()
            }).catch(function (error) {
                reject(error)
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
        let ref = this.db.collection("usuario").doc(usuarioId)
            .collection("prestador").doc(usuarioId)

        return new Promise<any>((retorno, reject) => {
            this.db.runTransaction(transaction => {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(ref).then(doc => {

                    let prestador = doc.data();
                    if (!prestador.servicos) {
                        prestador.servicos = [servico];
                        transaction.set(ref, prestador);
                    } else {
                        debugger
                        let prestador = doc.data();
                        prestador.servicos = prestador.servicos.filter(y => { return y.servicoId != servico.servicoId });
                        prestador.servicos.push(servico);
                        transaction.update(ref, prestador);
                    }
                });
            }).then(function () {
                retorno()
            }).catch(function (error) {
                reject(error)
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
                .where("usuarioId", "in", usuarios)
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
                .get().then(result => {
                    let lst = [];
                    if (result.data().servicos && result.data().servicos.length > 0) {
                        result.data().servicos.forEach(function (doc) {
                            lst.push(doc);
                        });
                    }
                    resolve(lst);
                }).catch(err => {
                    reject(err);
                });
        });
    }

    RecuperaPestadoresPesquisar(ufSelecionado: string, cidadeSelecionado: string, bairro: string, servicoId: string, igrejaId: string): Promise<any[]> {
        return new Promise((resolve, reject) => {

            let query = this.db.collectionGroup("prestador")
                .where("uf", "==", ufSelecionado)
                .where("situacaoPrestador", "==", Constants.TipoSituacaoPrestador.PendenteAutorizacao);

            if (cidadeSelecionado) {
                query = query.where("cidade", "==", cidadeSelecionado);
            }

            if (bairro) {
                query = query.where("bairro", "==", bairro);
            }
            // if (servicoId) {
            //     query = query.whereArrayContains("servicos", "array-contains", servicoId);
            // }

            query.get().then(result => {

                let lst = [];
                result.forEach(function (doc) {

                    if (doc.data().servicos) {
                        let servicosTemp = doc.data().servicos.filter(y => { return y.servicoId == servicoId });
                        if (servicosTemp.length > 0) {

                            let prestador = doc.data();
                            if (igrejaId) {
                                if (prestador.igrejas
                                    .filter(y => { return y.igrejaId == igrejaId }).length > 0) {
                                    lst.push(prestador);
                                } 
                            }else {
                                lst.push(prestador);
                            }
                        }
                    }
                });
                resolve(lst)
            }).catch(err => {
                console.log(err);
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


    RecuperaBairroPrestadorDisponiveis(uf: string, cidade: string): Promise<any[]> {

        return new Promise((resolve, reject) => {
            this.db.collectionGroup("prestador")
                .where("uf", "==", uf)
                .where("cidade", "==", cidade)
                .where("situacaoPrestador", "==", Constants.TipoSituacaoPrestador.PendenteAutorizacao)
                .get().then(result => {

                    let lst = [];
                    result.forEach(function (doc) {
                        if (!lst.includes(doc.data().bairro)) {
                            lst.push(doc.data().bairro);
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
