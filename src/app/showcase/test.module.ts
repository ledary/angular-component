import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import {Http, HttpModule,XHRBackend, RequestOptions} from '@angular/http';

//测试封装好的组件和本地组件
import {  DataTableModule} from 'ng-itoo-datatable';
// import { DataTableModule } from '.././components/datatable/datatable.module';
// import { CommonsModule } from '.././components/boke-test/module/common.module';
import { TestComponent} from './test.component';
import {testRoutes } from './test.routes';
import {DataTableDemo  } from './datatabledemo/datatabledemo.component';
import { BackTestComponent }  from './backtest/backtest.component';
import { ProxyComponent  } from './proxyTest/proxy.component'
import {  InterceptComponent} from './intercept-component/intercept.component';

import {SwiperComponent  } from './swiper-component/swiper.component';
import {LoginTest  } from './logintest/logintest.component';
import { DropDownModule } from '.././components/drop-down/drop-down.component.module';

import {QuestionTableComponent  } from './question-table/questiontable.component';
import {DragComponent  } from './drag/drag.component';
import {DragDirective  } from './drag-directive/drag.directive';
import {FormOperationComponent} from  './form-operation/form-operation.component'
import {ComponentComponent} from  './components/component'

import {  ComponentModule } from '.././components/component/component.module';




//  export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions){
//    let service = new HttpInterceptorService(xhrBackend, requestOptions);
//    return service;
//  }


@NgModule({
  declarations: [
    TestComponent,
    DataTableDemo,
    BackTestComponent,
    ProxyComponent,
    InterceptComponent,
    SwiperComponent,
    QuestionTableComponent,
    LoginTest,
    DragDirective,
    DragComponent,
    FormOperationComponent,
    ComponentComponent
  ], 

  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    ComponentModule,
    DropDownModule,
    RouterModule.forChild(testRoutes)
    


  ],
providers:[


],
exports:[DataTableDemo]
 

})
export class TestModule { }
