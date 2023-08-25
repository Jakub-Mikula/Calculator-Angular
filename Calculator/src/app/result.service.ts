import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  constructor() { }
  answers : number[] = [];
  intAnswers : number[] = [];
  formulas : string[] = [];

  addAnswer(answer: number) {
    this.removeAnswerAndFormula();
    this.answers.unshift(answer);
  }

  addFormula(formula: string) {
    this.formulas.unshift(formula);
  }

  addIntAnswer(intAnswer : number){
    this.intAnswers.unshift(intAnswer);
  }

  removeAnswerAndFormula(){
    if (this.answers.length == 3){
      this.answers.pop();
      this.intAnswers.pop();
      this.formulas.pop();
    }
  }

  getAllAnswers(){
    return this.answers;
  }

  getAllFormulas(){
    return this.formulas;
  }

  getAllIntAnswers() {
    return this.intAnswers;
  }
}
