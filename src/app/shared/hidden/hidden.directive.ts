import { Directive, HostBinding } from '@angular/core';

@Directive({
	selector: '[ngFirstHidden]',
	exportAs: 'ngH',
})
export class HiddenDirective {
	@HostBinding('style.visibility')
	public visibility: 'visible' | 'hidden' = 'hidden';

	public show(): void {
		this.visibility = 'visible';
	}

	public hide(): void {
		this.visibility = 'hidden';
	}
}
