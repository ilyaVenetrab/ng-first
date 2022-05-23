import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { IProduct } from '../product.service';

@Component({
	selector: 'ng-first-one-product',
	templateUrl: './one-product.component.html',
	styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent implements OnInit {
	public product$: Observable<IProduct> = this._activatedRoute.data.pipe(pluck('product'));

	public constructor(private readonly _activatedRoute: ActivatedRoute) {}

	public ngOnInit(): void {
		this._activatedRoute.data.subscribe((data) => {
			console.log(data);
		});

		this._activatedRoute.params.subscribe((p) => {
			console.log(p);
		});
	}
}
