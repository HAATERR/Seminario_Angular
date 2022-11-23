import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryPlayersComponent } from './brewery-players.component';

describe('BreweryPlayersComponent', () => {
  let component: BreweryPlayersComponent;
  let fixture: ComponentFixture<BreweryPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
