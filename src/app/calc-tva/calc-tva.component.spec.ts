import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcTVAComponent } from './calc-tva.component';

describe('CalcTVAComponent', () => {
  let component: CalcTVAComponent;
  let fixture: ComponentFixture<CalcTVAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcTVAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcTVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
