import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from './player-list/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerFollowsService {
  private _followList: Player[] = [];
  followList: BehaviorSubject<Player[]> = new BehaviorSubject(this._followList);
  
  
  addFollow(players: Player) {
    let item: Player = this._followList.find((v1) => v1.name == players.name)!;
    if(!item){
      this._followList.push({... players});
    }
    this.followList.next(this._followList);
    
  }


  constructor() { }
}
