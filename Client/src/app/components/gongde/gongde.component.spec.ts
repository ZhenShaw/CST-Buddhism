import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GongdeComponent } from './gongde.component';

describe('GongdeComponent', () => {
  let component: GongdeComponent;
  let fixture: ComponentFixture<GongdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GongdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GongdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
