import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
    private follow: PlayerFollowsService,
    private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.playersService.getAll()
     .subscribe(players => this.players = players );
  }
  addFollow(players: Player):void{
     this.follow.addFollow(players);
  }



}
