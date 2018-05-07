import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';


@Injectable()
export class HttpService {

  url : string = 'http://192.168.0.7/api-tp/';	

  constructor( public http: Http ) { }

  public async get(endPoint: string){

    return this.http.get( this.url + endPoint )
	    .toPromise()
	    .then( this.extractData )
	    .catch( this.handleError );
  }

  public post( endPoint: string, objeto: any ){

    return this.http.post( this.url + endPoint, objeto )
	    .toPromise()
	    .then( this.extractData )
	    .catch( this.handleError );

  }

  public delete(endPoint: string){

    return this.http.delete(this.url + endPoint)
      .toPromise()
      .then( this.extractData )
      .catch( this.handleError );

  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }

}
