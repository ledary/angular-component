import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewPapersComponent} from './preview-papers.component';

describe('PreviewPapersComponent', () => {
  let component: PreviewPapersComponent;
  let fixture: ComponentFixture<PreviewPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewPapersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
