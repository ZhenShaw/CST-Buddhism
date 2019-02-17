import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuanmingComponent } from './suanming.component';

describe('SuanmingComponent', () => {
  let component: SuanmingComponent;
  let fixture: ComponentFixture<SuanmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuanmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuanmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
