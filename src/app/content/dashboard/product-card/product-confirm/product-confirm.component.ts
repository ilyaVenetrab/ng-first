import { Component, Inject, NgModule } from '@angular/core';
import { IProduct, ProductService } from '../../product.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'ng-first-product-confirm',
	templateUrl: './product-confirm.component.html',
	styleUrls: ['./product-confirm.component.css'],
})
export class ProductConfirmComponent {
	public product!: IProduct;

	public add!: Function;

	public close!: Function;

	public constructor(@Inject(ProductService) public productService: any) {
		console.log('ProductConfirmComponent ==> ', productService);
	}
}

@NgModule({
	declarations: [ProductConfirmComponent],
	imports: [MatCardModule, MatButtonModule],
})
export class ProductConfirmModule {}
