import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.service';

@Pipe({
	name: 'productsFilter',
	pure: true,
})
export class ProductsFilterPipe implements PipeTransform {
	public transform(products: IProduct[], text: string, onlyFavorites: boolean = false): IProduct[] {
		let result = products;

		if (onlyFavorites) {
			result = products.filter((product: IProduct) => {
				return product.isFavorite === onlyFavorites;
			});
		}
		if (!text) {
			return result;
		}
		return result.filter((product: IProduct) => {
			return `${product.title}${product.price}`.toLowerCase().includes(text.toLowerCase());
		});
	}
}
