
import { TestComponent } from './test.component';
import { DataTableDemo }  from './datatabledemo/datatabledemo.component';
import { BackTestComponent }  from './backtest/backtest.component';
import { ProxyComponent  } from './proxyTest/proxy.component'
import { InterceptComponent  } from './intercept-component/intercept.component'
import {SwiperComponent  } from './swiper-component/swiper.component';
import {LoginTest  } from './logintest/logintest.component';
import {DragComponent  } from './drag/drag.component';
import {QuestionTableComponent  } from './question-table/questiontable.component';



export const testRoutes = [
    {
        path: '',
        component: TestComponent
    },
    
    { path: 'datatable/:id', component:DataTableDemo },
    { path: 'backtest', component:BackTestComponent },
    { path: 'proxy', component:ProxyComponent },
    { path: 'intercept', component:InterceptComponent },
    { path: 'swiper', component:SwiperComponent },
    { path: 'login', component:LoginTest },
    { path: 'drag', component:DragComponent },
    { path: 'questiontable', component:QuestionTableComponent },
    {path:'curriculum',loadChildren:"./curriculum/curriculum.module#CurriculumModule"},
    {path:'exammanager',loadChildren:"./examination-questions-manage/examination-questions-manage.module#ExaminationQuestionsManageModule"}


];
