// import * as firebase from 'firebase';
import { IWrite } from './IWirte';
import { IRead } from './IRead';
import { DocumentReference } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { FirebaseApp } from '@angular/fire';
export abstract class BaseRepository implements IWrite, IRead {
	public _collectionName: string;
	protected db: firebase.firestore.Firestore;
	public get serverTimestamp(): string {
		return null; //firebase.firestore.Timestamp.now().toDate().toString(); // Timestamp.now.toString();
	}

	/**
	 *
	 */
	constructor() {
		this.db = firebase.firestore();
	}



	// success
	addCollection = async (item: any): Promise<firebase.firestore.DocumentReference> => {
		// Add a new document with a generated id.
		// const data = JSON.parse(JSON.stringify(item));
		// console.log(data);
		//	const result = await this._db.collection(this._collectionName).add({ ...item });
		return null;
	};

	add(item: any, id: string): Promise<DocumentReference> {
		
		let idTemp = id ? id : this.db.collection(this._collectionName).doc().id;
		item.id = idTemp;
		return new Promise((resolve, reject) => {
			this.db.collection(this._collectionName)
				.doc(idTemp)
				.set({ ...item })
				.then((obj: any) => {
					resolve(obj);
				})
				.catch((error: any) => {
					reject(error);
				});
		});
	}

	update = async (documentName: string, item: any): Promise<any> => {
		return null;
		// const result = await firebase.database().ref(documentName).set({ ...item });
		// return result;
		// if (documentRef.collection.length <= 0) {
		// 	const result = await documentRef.update({ ...item });
		// 	return result;
		// } else {
		// 	console.log('error ', documentRef);
		// 	return Promise.reject(`${this._collectionName} collection not fount!!`);
		// }
	};
	// .where(element.obj, element.type, element.compare)
	find(filter: any): Promise<any[]> {
		return new Promise((resolve, reject) => {
			let ref = this.db.collection(this._collectionName)
			.where(filter.elemento, filter.tipoComparacao, filter.comparacao)
			.get()
			.then((result) => {

				let lst = [];
				result.forEach(function (doc) {

					lst.push({data : doc.data(), id:doc.id});
				})
				resolve(lst);
			})
			.catch(function (error) {
				reject(error)
			});
		});
	}

	findOne(id: string): Promise < any > {
			return new Promise((resolve, reject) => {
				this.db.collection(this._collectionName).doc(id)
					.get()
					.then((result) => {
						resolve(result.data());
					});
			});
		}
	// return  firebase.database().ref(documentName).once("value",(result=>{

	// 	console.log(result);			
	// }));

	async delete (id: string): Promise < boolean > {
			throw new Error('Method not implemented.');
		}
		recuperaColletion(collection: string) {
			return this.db.collection(collection);
		}
	}