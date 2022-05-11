import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'ng-first-singup',
	templateUrl: './singup.component.html',
	styleUrls: ['./singup.component.css'],
})
export class SingupComponent {
	public constructor(private _router: Router) {}

	public goToLogin(): void {
		this._router.navigate(['/login']);
	}
}
