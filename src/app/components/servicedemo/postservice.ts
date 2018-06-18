/**
 * Created by WGP on 2017/4/25.
 */
import { Injectable, Input } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BasicDataService } from './basicdataservice';


@Injectable()
export class PostService   {

    // private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'api/heroes';  // URL to web api

    constructor(private http: Http) {
   
    }

    //调用远程地址，获取数据 get方法
    //返回response的json串
    public getData(url: string): Promise<any> {

        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);

    }

    delete(url: string, obj: any) {
        //  url = `${url}/${obj.id}`;
        url = url + "/" + obj.id;
        return this.http.post(url, JSON.stringify(obj), { headers: this.headers })
            .toPromise().then(res => res.json() as any)
            .catch(this.handleError);

    }

    update(url: string, obj: any) {

        url = `${url}/${obj.id}`;
        return this.http.post(url, JSON.stringify(obj), { headers: this.headers })
            .toPromise().then(res => res.json() as any)
            .catch(this.handleError);

    }
    create(url: string, obj: any) {
        return this.http.post(url, JSON.stringify(obj))
            .toPromise().then(res => res.json() as any)
            .catch(this.handleError);
    }

    // 下载文件未实现
    downloadService(url: string): any {

        this.http.get("http://www.ahhb-l-tax.gov.cn/huaibei/files/2017-05-10/1494345601754689.xls")
            .toPromise().then(res => console.log(res));
        // console.log(a);
        //  return a;   

    }



    //错误处理
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

