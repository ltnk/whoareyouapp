import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { WayKimetsuNoYaibaPageRoutingModule } from "./way-kimetsu-no-yaiba-routing.module";

import { WayKimetsuNoYaibaPage } from "./way-kimetsu-no-yaiba.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    WayKimetsuNoYaibaPageRoutingModule,
  ],
  declarations: [WayKimetsuNoYaibaPage],
})
export class WayKimetsuNoYaibaPageModule {}
