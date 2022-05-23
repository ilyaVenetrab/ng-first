import { Component } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { IProduct, ProductService } from './product.service';
import { UnSubscriber } from '../../../../shared/utils/unsubscribe';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ng-first-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
})
export class ProductsComponent extends UnSubscriber {
	public products$: Observable<IProduct[]> = this._productService.getProducts();

	public onlyFavorites: boolean = false;

	public text = 'Galaxy 10';

	public title$ = this._activatedRoute.data.pipe(pluck('title'));

	public constructor(
		private _productService: ProductService,
		private readonly _activatedRoute: ActivatedRoute,
	) {
		super();
	}

	public changeText(text: string): void {
		this.text = text;
	}

	public setFavourites(event: MatCheckboxChange): void {
		this.onlyFavorites = event.checked;
	}
}
