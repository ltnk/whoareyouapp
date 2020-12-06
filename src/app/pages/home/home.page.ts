import { Component, OnInit } from "@angular/core";
import { DeathNoteQuizService } from "../../services/death-note-quiz.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  deathNoteQuizEnglish;
  deathNoteCharacter;
  constructor(
    private deathNoteQuizService: DeathNoteQuizService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  goToDeathNoteQuiz() {
    this.deathNoteQuizEnglish = this.deathNoteQuizService.deathNoteQuizEnglish;
    this.deathNoteCharacter = this.deathNoteQuizService.deathNoteCharacter;
  }

  goTo(myPath: string) {
    this.navCtrl.navigateForward(myPath);
  }

  goBack(myPath: string) {
    this.navCtrl.navigateBack(myPath);
  }
}
