import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhouGeneralComponent } from './zhou-general.component';

describe('ZhouGeneralComponent', () => {
  let component: ZhouGeneralComponent;
  let fixture: ComponentFixture<ZhouGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhouGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhouGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
