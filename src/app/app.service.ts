import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class  AppService{

     
    constructor(private http:Http) {}

  

           getHeroes(): Promise<any> {
           console.log("karan in service");
           return this.http.get('assets/personality_test.json')
               .toPromise()
               .then(response => response.json() )
               .catch(this.handleError);
            }
            
              private handleError(error: any): Promise<any> {
              console.error('An error occurred', error); // for demo purposes only
              return Promise.reject(error.message || error);
             }  

 
}