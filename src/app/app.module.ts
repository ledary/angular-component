import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';


// import { provideInterceptorService  } from 'ng2-interceptors';
// // import { provideInterceptorService } from './components/ngintercept/interceptor-provider';
// import { ServerUrlInterceptor   } from './showcase/util/http.interceptor';
// import { AuthService  } from './showcase/util/authservice'
import {Http, HttpModule,XHRBackend, RequestOptions,ConnectionBackend} from '@angular/http';

import { AppComponent } from './app.component';
import {appRoutes } from './app.routes';
import { AuthInterceptor  } from './showcase/util/authinterceptor';
import { HttpClientService  } from './showcase/util/httpclientservice';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';




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
    }
  ],
  bootstrap: [AppComponent],
 

})
export class AppModule { }
