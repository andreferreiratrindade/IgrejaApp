
export interface IRead {
	find(filter: any): Promise<any[]> ;
	findOne(documentName:string, id: string):Promise<any>;
}