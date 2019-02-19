import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QifuComponent } from './qifu.component';

describe('QifuComponent', () => {
  let component: QifuComponent;
  let fixture: ComponentFixture<QifuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QifuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QifuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
