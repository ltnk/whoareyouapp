import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WayDragonBallPage } from './way-dragon-ball.page';

const routes: Routes = [
  {
    path: '',
    component: WayDragonBallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WayDragonBallPageRoutingModule {}
