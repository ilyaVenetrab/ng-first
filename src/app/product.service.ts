import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
	public constructor(private _httpClient: HttpClient) {
		console.log(this._httpClient);
	}

	public getProducts() {
		return this._httpClient.get<IProduct[]>('');
	}
}
