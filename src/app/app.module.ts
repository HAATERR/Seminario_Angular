import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { FollowsComponent } from './follows/follows.component';
import { BreweryPlayersComponent } from './brewery-players/brewery-players.component';
import { BreweryFollowsComponent } from './brewery-follows/brewery-follows.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    FollowsComponent,
    BreweryPlayersComponent,
    BreweryFollowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
