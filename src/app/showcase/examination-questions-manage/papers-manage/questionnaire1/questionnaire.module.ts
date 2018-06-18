import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// import {QuestionnaireComponent1} from './questionnaire.component1';
import { QuestionnaireComponent1 } from './questionnaire1.component' ;

//这里引用的是题库的questionnaireModule,为什么不引用questionComponet因为一个组件只能放到一个module里。切记。
//questionnaireModule是真正题库的核心。里面包含了21个题型组件的模块。——》 questionModule。所以只引用一个questionnaire组件是不行的。
import{ QuestionnaireModule } from '../../inscription-manage/questionnaire/questionnaire.module';


@NgModule({
  imports: [CommonModule, FormsModule,QuestionnaireModule],
  declarations: [QuestionnaireComponent1],
  exports: [QuestionnaireComponent1, CommonModule, FormsModule]
})
export class ExamQuestionnaireModule {

}
