import { Component } from '@angular/core';

export interface IUser {
	username: string;
	password: string;
}

@Component({
	selector: 'ng-first-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	public login(user: IUser) {
		console.log(user);
	}
}
