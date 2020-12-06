import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "death-note",
    loadChildren: () =>
      import("./pages/way-death-note/way-death-note.module").then(
        (m) => m.WayDeathNotePageModule
      ),
  },
  {
    path: "dragon-ball",
    loadChildren: () =>
      import("./pages/way-dragon-ball/way-dragon-ball.module").then(
        (m) => m.WayDragonBallPageModule
      ),
  },
  {
    path: "kimetsu-no-yaiba",
    loadChildren: () =>
      import("./pages/way-kimetsu-no-yaiba/way-kimetsu-no-yaiba.module").then(
        (m) => m.WayKimetsuNoYaibaPageModule
      ),
  },
  {
    path: "one-piece",
    loadChildren: () =>
      import("./pages/way-one-piece/way-one-piece.module").then(
        (m) => m.WayOnePiecePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
