import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryFollowsComponent } from './brewery-follows/brewery-follows.component';
import { BreweryHistoryComponent } from './brewery-history/brewery-history.component';
import { BreweryPlayersComponent } from './brewery-players/brewery-players.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full'
  },
  {
    path: 'players',
    component: BreweryPlayersComponent
  },
  {
    path: 'history',
    component: BreweryHistoryComponent
  },
  {
    path: 'follows',
    component: BreweryFollowsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
