// Angular
//包含所有提供商依赖
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/compiler';
import '@angular/core';  // 存放核心代码，如变化监测机制，依赖注入机制，渲染，装饰器等。
import '@angular/common';
import '@angular/http';
import '@angular/router';
import '@angular/forms';
import '@angular/animations';

// RxJS
import 'rxjs/Observable';
import 'rxjs/Subscription';
import 'rxjs/Subject';
import 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


import 'ngx-clipboard';
import 'angular2-highlight-js';

// Bootsctrap
//import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

if('production'===ENV){
    // 生成环境
}else{
    // 开发环境
}