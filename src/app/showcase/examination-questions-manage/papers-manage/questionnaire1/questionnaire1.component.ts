import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'examquestionnaire',
  styleUrls: ['questionnaire.component.css'],
  templateUrl: 'questionnaire.component.html'

})
export class QuestionnaireComponent1 implements OnInit {
  @Input() courseId: string;
  @Input() questionnaire:any;
  @Input() paperQuestionTypeId: string;
  @Output() submitQuestionnaire = new EventEmitter();
  @Output() outCurScore = new EventEmitter();
 @Input() state:String;
  constructor() {
  }
    

  ngOnInit() {
  }

}
