import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import {Http, HttpModule,XHRBackend, RequestOptions} from '@angular/http';

//测试封装好的组件和本地组件
import {  DataTableModule} from 'ng-itoo-datatable';
// import { DataTableModule } from '.././components/datatable/datatable.module';
// import { CommonsModule } from '.././components/boke-test/module/common.module';
import { LoginModule  } from '.././components/login/login.module';
import { TestComponent} from './test.component';
import {testRoutes } from './test.routes';
import {DataTableDemo  } from './datatabledemo/datatabledemo.component';
import { BackTestComponent }  from './backtest/backtest.component';
import { ProxyComponent  } from './proxyTest/proxy.component'
import {  InterceptComponent} from './intercept-component/intercept.component';
import { HttpInterceptorService }   from './util/interceptservice';
import {BaseService } from './util/baseservice';

import {SwiperComponent  } from './swiper-component/swiper.component';
import {LoginTest  } from './logintest/logintest.component';
import { DropDownComponent } from '.././components/drop-down/drop-down.component';

import {QuestionTableComponent  } from './question-table/questiontable.component';
import {DragComponent  } from './drag/drag.component';
import {DragDirective  } from './drag-directive/drag.directive';





//  export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions){
//    let service = new HttpInterceptorService(xhrBackend, requestOptions);
//    return service;
//  }


@NgModule({
  declarations: [
    DropDownComponent,
    TestComponent,
    DataTableDemo,
    BackTestComponent,
    ProxyComponent,
    InterceptComponent,
    SwiperComponent,
    QuestionTableComponent,
    LoginTest,
    DragDirective,
    DragComponent
  ], 

  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    LoginModule,
    RouterModule.forChild(testRoutes)
    


  ],
providers:[


],
exports:[DataTableDemo]
 

})
export class TestModule { }
