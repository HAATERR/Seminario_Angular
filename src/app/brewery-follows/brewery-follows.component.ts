import { Component, OnInit } from '@angular/core';
import { PlayerFollowsService } from '../player-follows.service';
import { Player } from '../player-list/player';

@Component({
  selector: 'app-brewery-follows',
  templateUrl: './brewery-follows.component.html',
  styleUrls: ['./brewery-follows.component.scss']
})
export class BreweryFollowsComponent implements OnInit {
  
  
  followList: Player[] = [];
  constructor(private follow: PlayerFollowsService,) {
    follow.followList.subscribe(  f => this.followList = f );
   }

  ngOnInit(): void {
  }

}
