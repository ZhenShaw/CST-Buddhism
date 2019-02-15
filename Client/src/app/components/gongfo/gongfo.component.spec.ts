import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GongfoComponent } from './gongfo.component';

describe('GongfoComponent', () => {
  let component: GongfoComponent;
  let fixture: ComponentFixture<GongfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GongfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GongfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
