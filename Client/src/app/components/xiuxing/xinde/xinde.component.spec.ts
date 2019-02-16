import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XindeComponent } from './xinde.component';

describe('XindeComponent', () => {
  let component: XindeComponent;
  let fixture: ComponentFixture<XindeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XindeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XindeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
