import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PapersManageComponent} from './papers-manage.component';

describe('PapersManageComponent', () => {
  let component: PapersManageComponent;
  let fixture: ComponentFixture<PapersManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PapersManageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
