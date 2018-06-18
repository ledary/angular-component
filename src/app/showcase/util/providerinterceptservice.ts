import { FactoryProvider } from '@angular/core';
import { XHRBackend, RequestOptions } from '@angular/http';
import { HttpInterceptorService } from './interceptservice';

export function provideInterceptorService():FactoryProvider {
	let deps:any[] = [
		XHRBackend,
		RequestOptions
	];
	return {
		provide: HttpInterceptorService,
		useFactory: function(){
			let injectedServices = arguments;
			let xhrBackend:XHRBackend = injectedServices[0];
			let requestOptions:RequestOptions = injectedServices[1];

			let service = new HttpInterceptorService(xhrBackend, requestOptions);
		
			return service;
		},
		deps: deps,
		multi: false
	}
}
