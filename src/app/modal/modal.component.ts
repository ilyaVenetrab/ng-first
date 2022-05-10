import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { UnSubscriber } from '../unsubscribe';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'ng-first-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
})
export class ModalComponent extends UnSubscriber implements OnInit {
	public value: any;

	public constructor(private readonly _modalService: ModalService) {
		super();
	}

	public ngOnInit(): void {
		this._modalService.modalSequence.pipe(takeUntil(this.unSubscriber)).subscribe((value) => {
			this.value = value;
		});
	}
}
