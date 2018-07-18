import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import {Http, HttpModule,XHRBackend, RequestOptions} from '@angular/http';
import { AppComponent } from './app.component';
import {appRoutes } from './app.routes';
import { AuthInterceptor  } from './showcase/util/authinterceptor';
import { HttpClientService  } from './showcase/util/httpclientservice';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';


import { HttpInterceptorService }   from './showcase/util/interceptservice';
import {BaseService } from './showcase/util/baseservice';

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions){
  let service = new HttpInterceptorService(xhrBackend, requestOptions);
  return service;
}


@NgModule({
  declarations: [
    AppComponent 
  ], 

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
providers: [
  HttpClientService,
  {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,//自定义拦截器的类名
      multi: true,
    },

    BaseService,  HttpInterceptorService,
 {
      provide: HttpInterceptorService,
      useFactory: interceptorFactory, 
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
