import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorService } from './validator.service';

@Directive({
	selector: '[ngFirstUserNameValidator]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: UserNameValidatorDirective,
			multi: true,
		},
	],
})
export class UserNameValidatorDirective implements Validator {
	public constructor(private readonly _validatorService: ValidatorService) {}

	public validate(control: AbstractControl): ValidationErrors | null {
		return this._validatorService.withoutSpecialSymbol(control);
	}
}
