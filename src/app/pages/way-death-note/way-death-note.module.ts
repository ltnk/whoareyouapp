import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { WayDeathNotePageRoutingModule } from "./way-death-note-routing.module";

import { WayDeathNotePage } from "./way-death-note.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    WayDeathNotePageRoutingModule,
  ],
  declarations: [WayDeathNotePage],
})
export class WayDeathNotePageModule {}
