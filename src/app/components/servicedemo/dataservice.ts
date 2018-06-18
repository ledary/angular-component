/**
 * Created by WGP on 2017/4/25.
 */
import { Injectable, Input } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class BackDataService {

  // private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'api/heroes';  // URL to web api

  private Configuration: any;

  public getConfiguration() {
    return this.Configuration;
  }


  constructor(private http: Http) {
    // this.getWebfig();

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
  getToken(url:string){
       let headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers.append('Authorization', "12345");

    const searchParams = new URLSearchParams();

    return this.http.get(url, {search: searchParams, headers: headers})
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
  //   获取配置文件信息
  private getWebfig() {
    return this.http.get("src/mock-data/web-config.json", '')
      .map((res: Response) => res.json())
      .subscribe(
      data => {
        this.Configuration = data;
      }
      );



  }

  //错误处理
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}

