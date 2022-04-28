import { Component, Input } from '@angular/core';
import { IProduct } from '../data';

@Component({
	selector: 'ng-first-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
	@Input()
	public product: IProduct = {} as IProduct;

	@Input()
	public isOdd: boolean = false;

	public setFavourite(isFavorite: boolean): void {
		this.product.isFavorite = !isFavorite;
	}
}
