import { Component } from '@angular/core';
import {chartData} from "../data/mock";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  data = chartData;
}
