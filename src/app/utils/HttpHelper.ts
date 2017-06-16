import { Injectable,Inject } from '@angular/core';
import { Http,Response } from '@angular/http';
import { API_ROOT } from './../../config';

/**
 * Rxjs Module
 */
import "rxjs/add/operator/toPromise";
import 'rxjs/add/operator/map';

Injectable();
export class HttpHelper{
    constructor(@Inject(Http)private http:Http){}
    //https://stackoverflow.com/questions/36271899/what-is-the-correct-way-to-share-the-result-of-an-angular-2-http-network-call-in
    /**
     * 成功处理
     * @private
     * @param {*} response 
     * @returns {Promise<any>} 
     * 
     * @memberof HttpHelper
     */
    private handleResponse(response:any):Promise<any>{
        const data=response.json();
        console.log(data);
        return new Promise((resolve,reject)=>{
            if(data.code){
                return resolve(data);
            }else{
                return reject(data);
            }
        });        
    }

    private handleError(error:any):Promise<any>{        
        //const errmsg=[500,504].indexOf(error.status)>-1?error.body:JSON.parse(error.body).message;
        return Promise.reject(error);
    }
    /**
     * Get请求
     * @param {string} url 
     * @returns {Promise<any>} 
     * 
     * @memberof HttpHelper
     */
    public get(url:string):Promise<any>{
        return this.http.get(API_ROOT+url)
            .toPromise()
            .then(this.handleResponse)
            .catch(this.handleError);
    }
}