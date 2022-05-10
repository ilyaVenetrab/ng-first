import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService {
	private _sequence = new Subject();

	public get modalSequence() {
		return this._sequence.asObservable();
	}

	public open(data: any): void {
		this._sequence.next(data);
	}

	public close(): void {}
}
