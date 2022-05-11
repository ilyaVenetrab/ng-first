import { Component } from '@angular/core';
import { IRate, IrateMode } from './exchange-rates.directive';

@Component({
	selector: 'ng-first-exchange-rates',
	templateUrl: './exchange-rates.component.html',
	styleUrls: ['./exchange-rates.component.css'],
})
export class ExchangeRatesComponent {
	public rates: IRate[] = [
		{
			value: 10,
			currency: 'EUR',
		},
		{
			value: 100,
			currency: 'USD',
		},
		{
			value: 1,
			currency: 'RUB',
		},
	];

	public mode: IrateMode = IrateMode.ON;

	public ms: number = 5000;
}
