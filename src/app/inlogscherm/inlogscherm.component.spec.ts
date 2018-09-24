import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlogschermComponent } from './inlogscherm.component';

describe('InlogschermComponent', () => {
  let component: InlogschermComponent;
  let fixture: ComponentFixture<InlogschermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlogschermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlogschermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
