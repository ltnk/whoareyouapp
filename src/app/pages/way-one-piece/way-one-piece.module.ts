import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { WayOnePiecePageRoutingModule } from "./way-one-piece-routing.module";

import { WayOnePiecePage } from "./way-one-piece.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    WayOnePiecePageRoutingModule,
  ],
  declarations: [WayOnePiecePage],
})
export class WayOnePiecePageModule {}
