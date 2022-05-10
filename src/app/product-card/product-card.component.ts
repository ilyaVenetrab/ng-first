import { Component, Input } from '@angular/core';
import { IProduct } from '../data';
import { ModalService } from '../modal/modal.service';

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

	public constructor(private readonly _modalService: ModalService) {}

	public setFavourite(isFavorite: boolean): void {
		this.product.isFavorite = !isFavorite;
	}

	public addToCard(): void {
		this._modalService.open(this.product);
	}
}
