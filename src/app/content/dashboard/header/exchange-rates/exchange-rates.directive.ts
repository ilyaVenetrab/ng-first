/* eslint-disable */
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface IRate {
	currency: string;
	value: number;
}

export enum IrateMode {
	ON = 'on',
	OFF = 'off',
}

@Directive({
	selector: '[ngFirstExchangeRates]',
})
export class ExchangeRatesDirective implements OnInit {
	@Input('ngFirstExchangeRatesFrom')
	public rates!: IRate[];

	@Input('ngFirstExchangeRatesAutoplay')
	public autoplay: IrateMode = IrateMode.ON;

	@Input('ngFirstExchangeRateDelay')
	public delay: number = 2000;

	public context: any = {};

	public index: number = 0;

	constructor(
		private readonly _templateRef: TemplateRef<any>,
		private readonly _viewContainerRef: ViewContainerRef,
	) {}

	private _intervalID!: number | null;

	private _resetInterval(): void {
		if (this.autoplay === IrateMode.OFF) {
			return;
		}
		this._clearInterval()._initInterval();
	}

	private _initInterval(): void {
		// @ts-ignore
		this._intervalID = setInterval(() => {
			this._next();
		}, this.delay);
	}

	private _clearInterval(): this {
		if (this._intervalID) {
			clearInterval(this._intervalID);
		}

		return this;
	}

	private _prev(): void {
		this.index--;
		if (this.index < 0) {
			this.index = this.rates.length - 1;
		}
		this.context.$implicit = this.rates[this.index];
		this._resetInterval();
	}

	private _next(): void {
		this.index++;
		if (this.index >= this.rates.length) {
			this.index = 0;
		}
		this.context.$implicit = this.rates[this.index];
		this._resetInterval();
	}

	public ngOnInit(): void {
		this.context = {
			$implicit: this.rates[this.index],
			next: () => {
				this._next();
			},
			prev: () => {
				this._prev();
			},
		};
		this._viewContainerRef.createEmbeddedView(this._templateRef, this.context);
		this._resetInterval();
	}
}
