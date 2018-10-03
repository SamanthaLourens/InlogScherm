import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VindiemandComponent } from './vindiemand.component';

describe('VindiemandComponent', () => {
  let component: VindiemandComponent;
  let fixture: ComponentFixture<VindiemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VindiemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VindiemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
