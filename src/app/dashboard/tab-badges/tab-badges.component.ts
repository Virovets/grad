import { Component } from '@angular/core';
import {BadgeTableComponent} from "../badge-table/badge-table.component";

@Component({
  selector: 'app-tab-badges',
  standalone: true,
	imports: [
		BadgeTableComponent
	],
  templateUrl: './tab-badges.component.html',
  styleUrl: './tab-badges.component.scss'
})
export class TabBadgesComponent {

}
