import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PlayerDataService } from '../player-data.service';
import { PlayerFollowsService } from '../player-follows.service';
import { Player } from '../player-list/player';

@Component({
  selector: 'app-follows',
  templateUrl: './follows.component.html',
  styleUrls: ['./follows.component.scss']
})
export class FollowsComponent implements OnInit {
 
  followList: Player[] = [];
  constructor(private follow: PlayerFollowsService,
  ) {
    follow.followList.subscribe(  f => this.followList = f );
   }

  ngOnInit(): void {
    
  }

}
