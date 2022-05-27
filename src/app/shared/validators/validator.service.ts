import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ValidatorService {
	public constructor(private readonly _http: HttpClient) {}

	public withoutSpecialSymbol(this: this, control: AbstractControl): ValidationErrors | null {
		const valid = /^[a-zA-Z]*$/.test(control.value);

		return valid
			? null
			: {
					withoutSpecialSymbol: 'Field should be without special symbol',
			  };
	}

	public equalFields(this: this, control: FormGroup): ValidationErrors | null {
		const [password, cpassword] = Object.values(control.value);

		return password === cpassword
			? null
			: {
					equal: true,
			  };
	}

	public uniqueName(
		this: this,
		{ value: username }: FormControl,
	): Observable<ValidationErrors | null> {
		return this._http.post('/auth/checkUsername', { username });
	}
}
