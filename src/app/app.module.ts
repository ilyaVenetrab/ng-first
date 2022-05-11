import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from './shared/shared.module';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BASE_URL } from './tokens';
import { ModalModule } from './modal/modal.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent,
		SidenavComponent,
		ProductCardComponent,
		ProductsFilterPipe,
		ExchangeRatesComponent,
		ExchangeRatesDirective,
	],
	imports: [BrowserModule, BrowserAnimationsModule, SharedModule, HttpClientModule, ModalModule],
	providers: [
		ProductService,
		{
			provide: BASE_URL,
			useValue: environment.baseUrl,
		},
	],
	// entryComponents: [ProductConfitmComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
