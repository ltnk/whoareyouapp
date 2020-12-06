import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WayDeathNotePage } from './way-death-note.page';

const routes: Routes = [
  {
    path: '',
    component: WayDeathNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WayDeathNotePageRoutingModule {}
