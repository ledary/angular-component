import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {QuestionTextComponent} from './question-text/question-text.component';

import {FileUploadModule} from 'ng2-file-upload';
/* 计算分析题 */
/* 表单验证 */

// import { QuestionnaireComponent } from '../../questionnaire/questionnaire.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule
  ],
  declarations: [

    QuestionTextComponent


  ],
  exports: [

    QuestionTextComponent,
    CommonModule,
    FormsModule

  ]
})
export class QuestionSharedModule {
}
