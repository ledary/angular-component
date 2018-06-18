import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExaminationQuestionsManageComponent} from './examination-questions-manage.component';

describe('ExaminationQuestionsManageComponent', () => {
  let component: ExaminationQuestionsManageComponent;
  let fixture: ComponentFixture<ExaminationQuestionsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExaminationQuestionsManageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationQuestionsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
