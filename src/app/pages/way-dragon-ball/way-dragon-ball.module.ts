import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { WayDragonBallPageRoutingModule } from "./way-dragon-ball-routing.module";

import { WayDragonBallPage } from "./way-dragon-ball.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    WayDragonBallPageRoutingModule,
  ],
  declarations: [WayDragonBallPage],
})
export class WayDragonBallPageModule {}
