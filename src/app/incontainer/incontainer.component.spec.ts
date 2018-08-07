import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncontainerComponent } from './incontainer.component';

describe('IncontainerComponent', () => {
  let component: IncontainerComponent;
  let fixture: ComponentFixture<IncontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
