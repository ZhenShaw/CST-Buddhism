import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JingGeneralComponent } from './jing-general.component';

describe('JingGeneralComponent', () => {
  let component: JingGeneralComponent;
  let fixture: ComponentFixture<JingGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JingGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
