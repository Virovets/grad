import { Component } from '@angular/core';
import {badgeList} from "../data/mock";

@Component({
  selector: 'app-badge-table',
  standalone: true,
  imports: [],
  templateUrl: './badge-table.component.html',
  styleUrl: './badge-table.component.scss'
})
export class BadgeTableComponent {
  badges = badgeList;
}
