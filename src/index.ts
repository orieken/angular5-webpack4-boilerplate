import './index.html';
import './assets/app.less';
import './vendor';
import {AppModule} from './app/app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {enableProdMode} from '@angular/core';

declare const PRODUCTION; // webpack DefinePlugin

if (PRODUCTION) {
	console.log('PROD mode');
	enableProdMode();
} else {
	console.log('DEV mode');
}

platformBrowserDynamic().bootstrapModule(AppModule);