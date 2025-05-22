import { Component } from '@angular/core';
import {summaryData} from "../data/mock";

@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [],
  templateUrl: './summary-cards.component.html',
  styleUrl: './summary-cards.component.scss'
})
export class SummaryCardsComponent {
  data = summaryData;
}
