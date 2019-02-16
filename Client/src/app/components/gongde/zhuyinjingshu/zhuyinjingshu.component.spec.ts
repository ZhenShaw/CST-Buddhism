import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhuyinjingshuComponent } from './zhuyinjingshu.component';

describe('ZhuyinjingshuComponent', () => {
  let component: ZhuyinjingshuComponent;
  let fixture: ComponentFixture<ZhuyinjingshuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhuyinjingshuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhuyinjingshuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
