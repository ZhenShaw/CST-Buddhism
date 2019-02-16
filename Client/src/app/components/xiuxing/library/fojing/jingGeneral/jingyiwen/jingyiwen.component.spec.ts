import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JingyiwenComponent } from './jingyiwen.component';

describe('JingyiwenComponent', () => {
  let component: JingyiwenComponent;
  let fixture: ComponentFixture<JingyiwenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JingyiwenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JingyiwenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
