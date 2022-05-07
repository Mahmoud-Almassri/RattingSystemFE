import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintChampionsComponent } from './sprint-champions.component';

describe('SprintChampionsComponent', () => {
  let component: SprintChampionsComponent;
  let fixture: ComponentFixture<SprintChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintChampionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
