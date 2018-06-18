import {Injectable,Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {  BaseService }  from './baseservice';
/**什么也不做，只是简单的转发请求而不做任何修改*/
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

 
    //url前加前缀
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // const dupReq = req.clone({url:"http://192.168.22.201:8082/examinationEvaluation-web/".concat(req.url)})
    const dupReq = req.clone({url:"https://virtserver.swaggerhub.com/Library/Andior/1.0.0/".concat(req.url)})
    return next.handle(dupReq);
  }


//   //替换url
// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   // This is a duplicate. It is exactly the same as the original.
//   const dupReq = req.clone();

//   // Change the URL and replace 'http://' with 'https://'
//   const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
// }

}
