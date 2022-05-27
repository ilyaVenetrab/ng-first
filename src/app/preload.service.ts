import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { delay, mergeMap, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class PreloadService implements PreloadingStrategy {
	public preload(route: Route, fn: () => Observable<any>): Observable<any> {
		return of(route).pipe(
			filter((r: Route) => r.path === 'login' || r.path === 'signup'),
			delay(5000),
			mergeMap((r: Route) => {
				console.log(r);
				return fn();
			}),
		);
	}
}
