import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimiaoComponent } from './simiao.component';

describe('SimiaoComponent', () => {
  let component: SimiaoComponent;
  let fixture: ComponentFixture<SimiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
