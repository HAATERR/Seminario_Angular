import { TestBed } from '@angular/core/testing';

import { PlayerFollowsService } from './player-follows.service';

describe('PlayerFollowsService', () => {
  let service: PlayerFollowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerFollowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
