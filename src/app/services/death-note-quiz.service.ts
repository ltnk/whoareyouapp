import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DeathNoteQuizService {
  deathNoteCharacter = [
    {
      pseudo: "light",
      name: `Light Yagami (夜神 月, Yagami Raito)`,
      description: `You are a bored intellectual person dissatisfied with the the justice system of your country. 
      You judge people very quickly and you have trust issues. 
      You could be a good person or a completely bad person, it is up to you and you know it.
      But you do not care !`,
    },
    {
      pseudo: "elle",
      name: `L Lawliet (Ｌ・ローライト, Eru Rōraito)`,
      description: `You could be the
      world's greatest detective. Once you have something in mind, you have to go through it.
      Unfortunately, it does not work anytime. You are a bit odd, but you do not even know it !`,
    },
    {
      pseudo: "ryuk",
      name: `Ryuk (リューク, Ryūku) `,
      description: `You could be the king of the world ! But you just do not want it !`,
    },
    {
      pseudo: "misa",
      name: `Misa Amane (弥 海砂, Amane Misa) `,
      description: `You could be a very popular idol. You are a normal person but be careful with love !`,
    },
  ];

  deathNoteQuizEnglish = [
    {
      questionNumber: 1,
      title: "What do your friends say about you ?",
      rep1: "Beautiful but cold",
      rep2: "Very nice !",
      rep3: '"You scare me sometimes !"',
      rep4: `You don't have any friends`,
    },
    {
      questionNumber: 2,
      title: "What color do you have the most in your dressing ?",
      rep1: "Bright colors",
      rep2: "Black",
      rep3: "Dark and sober colors",
      rep4: `You don't know actually !`,
    },
    {
      questionNumber: 3,
      title: "Which sentence define life the most ?",
      rep1: "We born, we live, we die",
      rep2: "We born, we live a wonderful life, we die",
      rep3: "We born, we do the best that we can, we die",
      rep4: "We born, become the best, we die",
    },
    {
      questionNumber: 4,
      title: "The food you love :",
      rep1: "Chips",
      rep2: "Candies and Chocolate",
      rep3: "Fruits",
      rep4: "Cold drinks with sugar",
    },
    {
      questionNumber: 5,
      title: `Your best friend introduces you to her new boyfriend, you immediately think that he is the biggest jerk you
      have seen so far :`,
      rep1: "You tell it to your best friend !",
      rep2: "You tell it to the guy !",
      rep3: `You don't care !`,
      rep4:
        "Actually, the guy should not be that bad, you will give him a chance !",
    },
  ];
  constructor() {}

  getDeatNoteCharacter() {
    return this.deathNoteCharacter;
  }
  getDeathNoteQuizEnglish() {
    return this.deathNoteQuizEnglish;
  }
}
