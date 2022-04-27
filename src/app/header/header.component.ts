import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ng-first-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input()
	public title: string = '';

	@Output()
	public toggleSideNav = new EventEmitter();

	@Input()
	public drawer!: MatDrawer;

	public toggle() {
		this.toggleSideNav.emit({ ngx: 'Angular' });
		this.drawer.toggle();
	}
}
