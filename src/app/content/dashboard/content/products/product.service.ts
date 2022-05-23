import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

export interface IProduct {
	_id: string;
	title: string;
	img: string;
	price: number;
	author: string;
	isFavorite: boolean;
}

@Injectable()
export class ProductService {
	public constructor(private _httpClient: HttpClient) {}

	public getProducts() {
		return this._httpClient.get<IProduct[]>('/products');
	}

	public getProduct(id: string): Observable<IProduct | null> {
		return this._httpClient.get<IProduct>(`/products/${id}`).pipe(
			catchError(() => {
				return of(null);
			}),
		);
	}
}
