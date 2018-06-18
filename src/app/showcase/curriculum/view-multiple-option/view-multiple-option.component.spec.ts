import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMultipleOptionComponent } from './view-multiple-option.component';

describe('ViewMultipleOptionComponent', () => {
  let component: ViewMultipleOptionComponent;
  let fixture: ComponentFixture<ViewMultipleOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMultipleOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMultipleOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
