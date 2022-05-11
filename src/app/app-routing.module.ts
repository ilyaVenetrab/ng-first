import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'dashboard',
	},
	{
		path: 'login',
		loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'singup',
		loadChildren: () => import('./content/singup/signup.module').then((m) => m.SignupModule),
	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./content/dashboard/dashboard.module').then((m) => m.DashboardModule),
	},
	{
		path: '**',
		redirectTo: 'login',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
