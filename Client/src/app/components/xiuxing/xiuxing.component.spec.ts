import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XiuxingComponent } from './xiuxing.component';

describe('XiuxingComponent', () => {
  let component: XiuxingComponent;
  let fixture: ComponentFixture<XiuxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XiuxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XiuxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
