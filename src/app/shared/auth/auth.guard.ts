import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	public constructor(private _router: Router) {}

	public canActivate(
		_activatedRoute: ActivatedRouteSnapshot,
		router: RouterStateSnapshot,
	): Observable<boolean> {
		const { url } = router;
		return of(false).pipe(
			switchMap((isLoggedIn) => {
				if (!isLoggedIn && (url === '/login' || url === 'signup')) {
					return of(true);
				}
				if (isLoggedIn && (url === '/login' || url === 'signup')) {
					this._router.navigate(['/dashboard']);
					return of(false);
				}
				if (!isLoggedIn) {
					this._router.navigate(['/login']);
				}
				return of(isLoggedIn);
			}),
		);
	}
}
