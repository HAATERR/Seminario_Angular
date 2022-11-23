import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';
import { PlayerFollowsService } from '../player-follows.service';
import { Player } from './player';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
   players: Player[] = [];
  constructor(private playersService: PlayerDataService,
    private follow: PlayerFollowsService) { }

  ngOnInit(): void {
    this.playersService.getAll()
     .subscribe(players => this.players = players );
  }

}
