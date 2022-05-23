import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

@Component({
	selector: 'ng-first-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
	public title$ = this._activatedRoute.data.pipe(pluck('title'));

	public constructor(private readonly _activatedRoute: ActivatedRoute) {}

	public ngOnInit(): void {
		console.log(this._activatedRoute);
		console.log(this._activatedRoute.snapshot);
	}
}
