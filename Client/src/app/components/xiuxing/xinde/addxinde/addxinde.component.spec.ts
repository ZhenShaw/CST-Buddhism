import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddxindeComponent } from './addxinde.component';

describe('AddxindeComponent', () => {
  let component: AddxindeComponent;
  let fixture: ComponentFixture<AddxindeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddxindeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddxindeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
