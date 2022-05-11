import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SingupComponent } from './singup.component';

const routes: Route[] = [
	{
		path: '',
		component: SingupComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SignupRoutingModule {}
