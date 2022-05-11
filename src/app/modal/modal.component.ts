import {
	Component,
	ComponentFactory,
	ComponentRef,
	HostListener,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { IModalData, ModalService } from './modal.service';
import { UnSubscriber } from '../shared/utils/unsubscribe';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'ng-first-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
})
export class ModalComponent extends UnSubscriber implements OnInit {
	public value: any;

	public isOpen: boolean = false;

	public componentFactory!: ComponentFactory<any>;

	public componentRef!: ComponentRef<any>;

	@ViewChild('modalContent', {
		read: ViewContainerRef,
	})
	public modalContent!: ViewContainerRef;

	public constructor(
		private readonly _modalService: ModalService, // private readonly componentFactoryResolver: ComponentFactoryResolver,
	) {
		super();
	}

	public ngOnInit(): void {
		this._modalService.modalSequence
			.pipe(takeUntil(this.unSubscriber))
			.subscribe((modalData: IModalData | null) => {
				if (!modalData) {
					this.close();
					return;
				}
				this.isOpen = true;
				/*this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(
					modalData.component,
				);
				this.componentRef = this.modalContent.createComponent(this.componentFactory);*/
				this.componentRef = this.modalContent.createComponent<IModalData>(modalData.component);
				Object.keys(modalData.context).forEach((key: string) => {
					this.componentRef.instance[key] = modalData.context[key];
				});
				this.componentRef.changeDetectorRef.detectChanges();
				console.log(modalData);
			});
	}

	@HostListener('window:keyup', ['$event.keyCode'])
	public close(code: number = 27): void {
		if (code !== 27) {
			return;
		}
		if (this.componentRef) {
			this.componentRef.destroy();
		}
		this.isOpen = false;
	}
}
