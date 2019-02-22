import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuangeComponent } from './xuange.component';

describe('XuangeComponent', () => {
  let component: XuangeComponent;
  let fixture: ComponentFixture<XuangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
