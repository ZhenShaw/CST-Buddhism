import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiuqianComponent } from './qiuqian.component';

describe('QiuqianComponent', () => {
  let component: QiuqianComponent;
  let fixture: ComponentFixture<QiuqianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QiuqianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QiuqianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
