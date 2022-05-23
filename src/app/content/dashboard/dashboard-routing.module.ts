import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Route[] = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'products',
				loadChildren: () =>
					import('./content/products/products.module').then((m) => m.ProductsModule),
				data: {
					title: 'Products List',
				},
			},
			{
				path: 'profile',
				loadChildren: () => import('./content/profile/profile.module').then((m) => m.ProfileModule),
				data: {
					title: 'You Profile',
				},
			},
			{
				path: '**',
				redirectTo: 'products',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
