import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {examinationQuestionManageRoutes} from './examination-questions-manage.routes';
import {ExaminationQuestionsManageComponent} from './examination-questions-manage.component';



import {DataTableModule} from 'ng-itoo-datatable';



@NgModule({
  imports: [
    DataTableModule,
    CommonModule,
    RouterModule.forChild(examinationQuestionManageRoutes),
    FormsModule
  ],
  declarations: [
  ]

})
export class ExaminationQuestionsManageModule {
}
