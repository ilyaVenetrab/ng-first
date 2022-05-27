import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
	declarations: [SignupComponent],
	imports: [SharedModule, SignupRoutingModule],
})
export class SignupModule {}
