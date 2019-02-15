import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaziComponent } from './bazi.component';

describe('BaziComponent', () => {
  let component: BaziComponent;
  let fixture: ComponentFixture<BaziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
