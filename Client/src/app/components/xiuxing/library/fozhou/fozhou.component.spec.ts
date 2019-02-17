import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FozhouComponent } from './fozhou.component';

describe('FozhouComponent', () => {
  let component: FozhouComponent;
  let fixture: ComponentFixture<FozhouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FozhouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FozhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
