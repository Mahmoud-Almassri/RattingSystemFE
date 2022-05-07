import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAverageComponent } from './rate-average.component';

describe('RateAverageComponent', () => {
  let component: RateAverageComponent;
  let fixture: ComponentFixture<RateAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
