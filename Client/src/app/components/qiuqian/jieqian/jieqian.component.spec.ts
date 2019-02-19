import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JieqianComponent } from './jieqian.component';

describe('JieqianComponent', () => {
  let component: JieqianComponent;
  let fixture: ComponentFixture<JieqianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JieqianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JieqianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
