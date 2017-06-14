import { decorateModuleRef } from './app/environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
export function main():Promise<any>{
    return platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then(decorateModuleRef)
        .catch(err=>console.error(err));
}
main();
// platformBrowserDynamic().bootstrapModule()方法来编译启用AppModule模块
// 根据当前的运行环境，如操作系统、浏览器，来初始化一个运行环境，然后从这个环境里面运行AppModule。