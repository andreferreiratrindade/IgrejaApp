
import * as firebase from 'firebase';
export interface IWrite {
	addCollection(item: any): Promise<firebase.firestore.DocumentReference>;
	add( item: any, id:string): Promise<firebase.firestore.DocumentReference>;
	// create(item: T): Promise<boolean>;
	update(id: string, item: any): Promise<boolean>;
	delete(id: string): Promise<boolean>;
}