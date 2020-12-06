import { NgModule } from "@angular/core";
import { WayLogoComponent } from "./way-logo/way-logo.component";
import { WayQuestionComponent } from "./way-question/way-question.component";
import { WayResponseComponent } from "./way-response/way-response.component";

@NgModule({
  declarations: [WayLogoComponent, WayQuestionComponent, WayResponseComponent],
  exports: [WayLogoComponent, WayQuestionComponent, WayResponseComponent],
})
export class ComponentsModule {}
