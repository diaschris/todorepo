import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonecontainerComponent } from './donecontainer.component';

describe('DonecontainerComponent', () => {
  let component: DonecontainerComponent;
  let fixture: ComponentFixture<DonecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
