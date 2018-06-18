/**
 * Author:张欢
 * Date:2017-10-2
 * Features:试卷中间页面
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-questionnaire',
  styleUrls: ['questionnaire.component.css'],
  templateUrl: 'questionnaire.component.html'
})
export class QuestionnaireComponent implements OnInit {


  @Input() showDelete: boolean;
  @Input() addQuestionModel=[];
  // true 时为编辑，false为添加
  @Input() editFlag = true;
  @Input() addProblemModel: any;

  @Input() courseId: string;

// 提交试题为保存/编辑 - 武刚鹏 -2018年3月9日17:08:16
  @Output() submitQuestionnaire = new EventEmitter();
  // solar 发送题干 武刚鹏 -2018年3月9日17:08:11
  @Output() getOtherQuestionRequest = new EventEmitter();


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  // private editable:boolean;

  ngOnInit() {

  }


  /**
   * emit发送题干给父题
   * 提交保存的试题-武刚鹏-2018年3月9日16:56:51
   */
  onSubmit() {
    console.log(this.addProblemModel);
    console.log(this.addProblemModel + 'questionnaire发送给父题的实体');
    this.submitQuestionnaire.emit(this.addProblemModel);
  }


  /**
   * emit发送题干给父题
   * 根据题干查询solar相似题
   */
  getOtherQuestion(q: any) {
    console.log('questionnaire的solr功能' + q + '前面是传过来的题干');
    console.log(q);
    console.log('*******************************************');
    this.getOtherQuestionRequest.emit(q);
  }


}

export class ProblemAnswerModel {
  answerArray = [];
  aliasAnswerArray = [];
}
