import { Inject, Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../tokens';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	public constructor(@Inject(BASE_URL) private readonly _baseUrl: string) {}

	public intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler,
	): Observable<HttpEvent<unknown>> {
		const url = request.url;
		const headers = request.headers.append('Content-Type', 'application/json');
		const req = request.clone({
			url: `${this._baseUrl}${url}`,
			headers,
		});
		return next.handle(req).pipe(
			filter(
				(event: HttpEvent<unknown>): event is HttpResponse<{ data: unknown }> =>
					event instanceof HttpResponse,
			),
			map((res: HttpResponse<{ data: unknown }>) => {
				return res.clone({ body: res.body });
			}),
		);
	}
}
