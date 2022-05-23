import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ng-first-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
	public title = 'My App';

	public drawer!: MatDrawer;

	public constructor(private _changeDetectorRef: ChangeDetectorRef) {}

	/*public ngOnInit(): void {
    this.products$.pipe(takeUntil(this.unSubscriber)).subscribe((p: IProduct[]) => {
      this.products = p;
    });
  }*/

	public setDrawer(drawer: MatDrawer): void {
		this.drawer = drawer;
		this._changeDetectorRef.detectChanges();
	}
}
