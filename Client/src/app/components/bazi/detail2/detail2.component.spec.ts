import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail2Component } from './detail2.component';

describe('Detail2Component', () => {
  let component: Detail2Component;
  let fixture: ComponentFixture<Detail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
