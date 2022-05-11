import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SingupComponent } from './singup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
	declarations: [SingupComponent],
	imports: [SharedModule, SignupRoutingModule],
})
export class SignupModule {}
