import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Config } from 'src/app/config';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class BaseProvider {

  constructor(public http: Http) {

  }


  apiGet(url: string):Promise<any> {
    return this.http.get( url)
    .toPromise()
    .then(data => {
      return data.json();
    })
    .catch(this.handleError);

  }

  apiPost(url: string, obj: any) {

    // return this.http
    //   .post(Config.apiUrl + url, obj, this.getRequestOptions())
    //   .toPromise()
    //   .then(data => {
    //     return data.json();
    //   })
    //   .catch(this.handleError);
  }

  getRequestOptions(): RequestOptions {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    // headers.append('Authentication', Config.token);
    return new RequestOptions({ headers: headers });
  }


  private handleError(error: Response) {
    console.error(error);
    // return Observable.throw(error.json() || 'Server error');
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  
}
