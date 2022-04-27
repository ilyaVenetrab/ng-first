import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'ng-first-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
})
export class SearchComponent {
	@Input()
	public searchTerm: string = '';

	@Output()
	public searchTermChange: EventEmitter<string> = new EventEmitter<string>();

	public search(event: Event) {
		let { value } = event.target as HTMLInputElement;
		this.searchTermChange.emit(value);
	}
}
