import { Component } from '@angular/core';
import { ResultService } from "../../result.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
    constructor(private resultService : ResultService) {
    }
    answers = this.resultService.getAllAnswers();
    formulas = this.resultService.getAllFormulas();
    intAnswers = this.resultService.getAllIntAnswers();
}
