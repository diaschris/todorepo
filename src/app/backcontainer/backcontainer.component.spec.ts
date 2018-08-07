import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackcontainerComponent } from './backcontainer.component';

describe('BackcontainerComponent', () => {
  let component: BackcontainerComponent;
  let fixture: ComponentFixture<BackcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
