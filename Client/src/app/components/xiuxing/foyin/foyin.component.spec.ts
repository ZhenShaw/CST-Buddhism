import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyinComponent } from './foyin.component';

describe('FoyinComponent', () => {
  let component: FoyinComponent;
  let fixture: ComponentFixture<FoyinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoyinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoyinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
