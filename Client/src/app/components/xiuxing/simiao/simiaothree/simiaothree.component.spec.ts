import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimiaothreeComponent } from './simiaothree.component';

describe('SimiaothreeComponent', () => {
  let component: SimiaothreeComponent;
  let fixture: ComponentFixture<SimiaothreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimiaothreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimiaothreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
