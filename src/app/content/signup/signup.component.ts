import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../shared/validators/validator.service';

@Component({
	selector: 'ng-first-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
	public signUpForm = this._formBuilder.group({
		username: [
			'Ilya',
			{
				validators: [
					Validators.required,
					Validators.minLength(5),
					this._validatorService.withoutSpecialSymbol,
				],
				asyncValidators: [this._validatorService.uniqueName.bind(this._validatorService)],
				updateOn: 'blur',
			},
		],
		male: [true],
		emails: this._formBuilder.array([this._formBuilder.control('', Validators.required)]),
		password: this._formBuilder.group(
			{
				password: ['', Validators.required],
				cpassword: ['', Validators.required],
			},
			{
				validators: [this._validatorService.equalFields],
			},
		),
	});

	public constructor(
		private readonly _router: Router,
		private readonly _formBuilder: FormBuilder,
		private readonly _validatorService: ValidatorService,
	) {}

	public goToLogin(): void {
		this._router.navigate(['/login']);
	}

	public signup(): void {
		console.log(this.signUpForm.value);
	}

	public getControls(control: AbstractControl, path: string): AbstractControl[] {
		return (control.get(path) as FormArray).controls;
	}

	public addEmail(): void {
		(this.signUpForm.get('emails') as FormArray).push(
			this._formBuilder.control('', Validators.required),
		);
	}

	public removeIndex(index: number): void {
		(this.signUpForm.get('emails') as FormArray).removeAt(index);
	}
}
