import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuanxianghuoComponent } from './juanxianghuo.component';

describe('JuanxianghuoComponent', () => {
  let component: JuanxianghuoComponent;
  let fixture: ComponentFixture<JuanxianghuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuanxianghuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuanxianghuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
