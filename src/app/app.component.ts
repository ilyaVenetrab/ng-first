import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'ng-first-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	public constructor(private readonly _route: Router) {}

	public ngOnInit() {
		this._route.events
			.pipe(filter((e) => e instanceof NavigationStart && e.id === 1))
			.subscribe(() => {});
	}
}
