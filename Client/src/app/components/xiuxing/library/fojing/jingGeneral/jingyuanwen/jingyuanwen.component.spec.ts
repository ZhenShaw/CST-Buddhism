import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JingyuanwenComponent } from './jingyuanwen.component';

describe('JingyuanwenComponent', () => {
  let component: JingyuanwenComponent;
  let fixture: ComponentFixture<JingyuanwenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JingyuanwenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JingyuanwenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
