import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AislogoComponent } from './aislogo.component';

describe('AislogoComponent', () => {
  let component: AislogoComponent;
  let fixture: ComponentFixture<AislogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AislogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AislogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
