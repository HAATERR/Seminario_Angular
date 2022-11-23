import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryFollowsComponent } from './brewery-follows.component';

describe('BreweryFollowsComponent', () => {
  let component: BreweryFollowsComponent;
  let fixture: ComponentFixture<BreweryFollowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryFollowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryFollowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
