import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';
import { PreloadService } from './preload.service';

const routes: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'dashboard',
	},
	{
		path: 'login',
		loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'signup',
		loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./content/dashboard/dashboard.module').then((m) => m.DashboardModule),
		canActivate: [AuthGuard],
	},
	{
		path: '**',
		redirectTo: 'login',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadService })],
	exports: [RouterModule],
	providers: [PreloadService],
})
export class AppRoutingModule {}
