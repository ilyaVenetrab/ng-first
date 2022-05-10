import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct } from './data';
import { UnSubscriber } from './unsubscribe';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'ng-first-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscriber {
	public title = 'My App';

	public text = 'Galaxy 10';

	public drawer!: MatDrawer;

	public products$: Observable<IProduct[]> = this._productService.getProducts();

	public onlyFavorites: boolean = false;

	public constructor(
		private _productService: ProductService,
		private _changeDetectorRef: ChangeDetectorRef,
	) {
		super();
	}

	/*public ngOnInit(): void {
		this.products$.pipe(takeUntil(this.unSubscriber)).subscribe((p: IProduct[]) => {
			this.products = p;
		});
	}*/

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
