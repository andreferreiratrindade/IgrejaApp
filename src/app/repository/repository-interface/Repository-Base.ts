import * as firebase from 'firebase';
import { IWrite } from './IWirte';
import { IRead } from './IRead';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
	public readonly _db: firebase.firestore.Firestore;
	public readonly _collectionName: string;
	public readonly _firebase: any;
	public readonly _app: firebase.app.App;

	public get serverTimestamp(): string {
		return firebase.firestore.Timestamp.now().toDate().toString(); // Timestamp.now.toString();
	}

	constructor() {
		
		// if (firebase.apps.length) {
		// 	this._db = this._app.firestore();
		// }
		// this._firebase = this._app;
	}

	// success
	addCollection = async (item: T): Promise<firebase.firestore.DocumentReference> => {
		// Add a new document with a generated id.
		// const data = JSON.parse(JSON.stringify(item));
		// console.log(data);
		const result = await this._db.collection(this._collectionName).add({ ...item });
		return result;
	};

	add = async (documentName: string, item: T): Promise<void> => {
		const result = await firebase.database().ref(documentName).set({ ...item });
		return result;
	};

	update = async (documentName: string, item: T): Promise<any> => {
		const result = await firebase.database().ref(documentName).set({ ...item });
		return result;
		// if (documentRef.collection.length <= 0) {
		// 	const result = await documentRef.update({ ...item });
		// 	return result;
		// } else {
		// 	console.log('error ', documentRef);
		// 	return Promise.reject(`${this._collectionName} collection not fount!!`);
		// }
    };
    
    async find(item: T): Promise<T[]> {
		throw new Error('Method not implemented.');
	}
	async findOne(id: string): Promise<T> {
		throw new Error('Method not implemented.');
	}

	async delete(id: string): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
}