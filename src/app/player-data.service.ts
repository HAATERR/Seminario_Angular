import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Player } from './player-list/player';


const URL = 'https://637e58cbcfdbfd9a63af1692.mockapi.io/player'; 

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Player[]>{
    return this.http.get<Player[]>(URL);
  }
}
