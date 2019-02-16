import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FojingComponent } from './fojing.component';

describe('FojingComponent', () => {
  let component: FojingComponent;
  let fixture: ComponentFixture<FojingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FojingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FojingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
