import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryHistoryComponent } from './brewery-history.component';

describe('BreweryHistoryComponent', () => {
  let component: BreweryHistoryComponent;
  let fixture: ComponentFixture<BreweryHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
