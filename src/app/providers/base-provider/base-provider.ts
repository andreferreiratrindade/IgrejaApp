import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
// import { Observable } from 'rxjs/Observable';
import { Config } from 'src/app/config';


@Injectable()
export class BaseProvider {



  // constructor(public http: Http) {

  // }

/*
  apiGet(url: string) {
    return this.http.get(Config.apiUrl + url, this.getRequestOptions())
      .toPromise()
      .catch(e => console.log("reg error", e));
  }

  apiPost(url: string, obj: any) {

    return this.http
      .post(Config.apiUrl + url, obj, this.getRequestOptions())
      .toPromise()
      .then(data => {
        return data.json();
      })
      .catch(this.handleError);
  }

  getRequestOptions(): RequestOptions {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authentication', Config.token);
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
  */
}
