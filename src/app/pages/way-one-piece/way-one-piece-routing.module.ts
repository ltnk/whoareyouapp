import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WayOnePiecePage } from './way-one-piece.page';

const routes: Routes = [
  {
    path: '',
    component: WayOnePiecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WayOnePiecePageRoutingModule {}
