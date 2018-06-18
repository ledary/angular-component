import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InscriptionManageComponent} from './inscription-manage.component';

describe('InscriptionManageComponent', () => {
  let component: InscriptionManageComponent;
  let fixture: ComponentFixture<InscriptionManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionManageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
