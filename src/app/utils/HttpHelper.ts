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
    private handleResponse(response:Response){
        const data=response.json();        
        return data||{};
    }
    /**
     * 错误处理
     * @param error 
     */
    private handleError(error:Response|any){
        let errMsg:string;
        if(error instanceof Response){
            const body=error.json()||'';
            const err=body.error||JSON.stringify(body);
            errMsg=`${error.status} - ${error.statusText} || '' ${err}`;
        }else{
            errMsg=error.message?error.message:error.toString();
        }
        console.log(errMsg);    
        return Promise.reject(errMsg);
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