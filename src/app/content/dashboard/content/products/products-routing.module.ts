import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OneProductComponent } from './one-product/one-product.component';
import { OneProductResolver } from './one-product/one-product.resolver';

const routes: Route[] = [
	{
		path: '',
		component: ProductsComponent,
	},
	{
		path: ':productId',
		component: OneProductComponent,
		resolve: {
			product: OneProductResolver,
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsRoutingModule {}
