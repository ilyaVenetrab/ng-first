import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'ng-first-switcher',
	templateUrl: './switcher.component.html',
	styleUrls: ['./switcher.component.css'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SwitcherComponent,
			multi: true,
		},
	],
})
export class SwitcherComponent implements ControlValueAccessor {
	public checked: boolean = true;

	private _onChange: Function = () => {};

	@HostListener('click')
	public toggle() {
		this.checked = !this.checked;
		this._onChange(this.checked);
	}

	public writeValue(checked: boolean): void {
		this.checked = checked;
	}

	public registerOnChange(fn: any) {
		this._onChange = fn;
	}

	public registerOnTouched(_fn: any) {}
}
