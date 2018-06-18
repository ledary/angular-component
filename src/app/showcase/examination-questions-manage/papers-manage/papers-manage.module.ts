import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {PapersManageComponent} from './papers-manage.component';
import {PreviewPapersComponent} from './preview-papers/preview-papers.component';
import {papersManageRoutes} from './papers-manage.routes';
//这里是引用的你的  questionnaire1里面的module.
//把你的module引过来，examquestionnaire标签才起作用
 import {ExamQuestionnaireModule} from './questionnaire1/questionnaire.module';
import {DataTableModule} from 'ng-itoo-datatable';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  imports: [
    DataTableModule,
    CommonModule,
    ExamQuestionnaireModule,
    FileUploadModule,
    RouterModule.forChild(papersManageRoutes)
  ],
  declarations: [
    PapersManageComponent,
    PreviewPapersComponent
  ]
})
export class PapersManageModule {
}
