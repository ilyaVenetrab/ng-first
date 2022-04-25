import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
	selector: 'ng-first-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public title = 'My App';

	public span = this.domSanitizer.bypassSecurityTrustHtml(
		`<span style="color: red;">project-ng-first-starter</span>`,
	);

	public constructor(public readonly domSanitizer: DomSanitizer) {}

	public myClick(tag: SafeHtml, event: Event) {
		console.log('myClick => ', tag);
		console.log('myClick => event', event);
	}

	public toggle(myObj: any) {
		console.log(myObj);
	}
}
