import { Component, Input } from '@angular/core';
import { ModalService } from '../../../../../modal/modal.service';
import { IProduct } from '../product.service';

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

	public async addToCard() {
		const m = await import('./product-confirm/product-confirm.component');
		this._modalService.open({
			component: m.ProductConfirmComponent,
			context: {
				product: { ...this.product },
				add: () => {
					console.log('add to card');
					this._modalService.close();
				},
				close: () => {
					console.log('close');
					this._modalService.close();
				},
			},
		});
	}
}
