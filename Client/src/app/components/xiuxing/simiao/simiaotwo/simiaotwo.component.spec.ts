import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimiaotwoComponent } from './simiaotwo.component';

describe('SimiaotwoComponent', () => {
  let component: SimiaotwoComponent;
  let fixture: ComponentFixture<SimiaotwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimiaotwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimiaotwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
