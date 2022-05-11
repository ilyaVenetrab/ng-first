import {
	Component,
	Output,
	ContentChild,
	EventEmitter,
	OnInit,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ng-first-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
	@ViewChild('drawer', {
		static: true,
	})
	public drawer!: MatDrawer;

	@ViewChild('contentPlace', {
		read: ViewContainerRef,
		static: true,
	})
	public contentPlace!: ViewContainerRef;

	@ContentChild('contentTemp', {
		static: true,
	})
	public tmp!: TemplateRef<any>;

	@Output()
	public setDrawerControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

	public ngOnInit(): void {
		this.contentPlace.createEmbeddedView(this.tmp);
		this.setDrawerControl.emit(this.drawer);
	}
}
