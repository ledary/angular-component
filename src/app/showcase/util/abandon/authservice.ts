import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { InterceptorService  } from '../../../components/ngintercept/interceptor-service';
// import { InterceptorService  } from 'ng2-interceptors';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: InterceptorService ) { }


  get(url:string):Promise<any> {
    return this.http.get(url).toPromise()
               .then(response => response.json().data as any)
               .catch(this.handleError); 
  } 




    private handleError(error: any): Promise<any> {
    console.error('发生错误', error); 
    return Promise.reject(error.message || error);
  }
}

export class User{
    userId:string;
    userName:string;
}