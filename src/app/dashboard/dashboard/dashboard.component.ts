import { Component } from '@angular/core';
import {ChartComponent} from "../chart/chart.component";
import {SummaryCardsComponent} from "../summary-cards/summary-cards.component";
import {TabBadgesComponent} from "../tab-badges/tab-badges.component";
import {HeaderComponent} from "../../layout/header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
	imports: [
		ChartComponent,
		SummaryCardsComponent,
		TabBadgesComponent,
		HeaderComponent
	],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
