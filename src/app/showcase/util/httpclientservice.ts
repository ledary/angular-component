/**
 * Created by WGP on 2017/4/25.
 * HttpClient 是自带拦截器的，可以配置自己的拦截器 ，详细请见  ./authinterceptor.ts
 */
import {Component, OnInit,Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient,HttpHeaders} from "@angular/common/http";



@Injectable()
export class HttpClientService {
    private httpheaders = new HttpHeaders ({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {}


    get(url:string): Promise<any>{
      return this.http
      .get(url)
      .toPromise()
      .then(response => response as any)
    }



  post(url: string, body: any) {

    return this.http.post(url, body, { headers: this.httpheaders })
      .toPromise().then(res => res as any)
      .catch(this.handleError);

  }

  // delete(url:string){
  //       return this.http.delete(url)
  //     .toPromise().then(res => res as any)
  //     .catch(this.handleError);
  // }


    //错误处理
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




}

