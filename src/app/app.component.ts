import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { UnSubscriber } from './unsubscribe';
import { takeUntil } from 'rxjs/operators';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
	selector: 'ng-first-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscriber implements OnInit {
	public title = 'My App';

	public text = 'Galaxy 10';

	public drawer!: MatDrawer;

	public products: IProduct[] | null = null;

	public products$ = products$;

	public onlyFavorites: boolean = false;

	public constructor(private _changeDetectorRef: ChangeDetectorRef) {
		super();
	}

	public ngOnInit(): void {
		this.products$.pipe(takeUntil(this.unSubscriber)).subscribe((p: IProduct[]) => {
			this.products = p;
		});
	}

	public changeText(text: string): void {
		this.text = text;
	}

	public setDrawer(drawer: MatDrawer): void {
		this.drawer = drawer;
		this._changeDetectorRef.detectChanges();
	}

	public setFavourites(event: MatCheckboxChange): void {
		this.onlyFavorites = event.checked;
	}
}
