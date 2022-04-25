import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'ng-first-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	@Input()
	public title: string = '';

	@Output()
	public toggleSideNav = new EventEmitter();

	public toggle() {
		this.toggleSideNav.emit({ ngx: 'Angular' });
	}

	public ngOnInit(): void {
		console.log('test');
	}
}
