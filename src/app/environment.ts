import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode, ApplicationRef } from '@angular/core';
// 环境提供者
let PROVIDERS:any[]=[
    // 通用环境指令
];

// Angular 调试工具开发人员控制台
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
let _decorateModuleRef=function identity<T>(value:T):T{return value;};

if('production'===ENV||'renderer'===ENV){
    // 生产环境
    // Issues https://github.com/qdouble/angular-webpack2-starter/issues/263
    // disableDebugTools();
    enableProdMode();
    PROVIDERS=[
        ...PROVIDERS
        // 自定义生产环境提供者
    ];
} else {
    _decorateModuleRef=(modRef:any)=>{
        const appRef=modRef.injector.get(ApplicationRef);
        const cmpRef=appRef.components[0];

        let _ng=(<any>window).ng;
        enableDebugTools(cmpRef);
        (<any>window).ng.probe=_ng.probe;
        (<any>window).ng.coreTokens=_ng.coreTokens;
        return modRef;
    };

    // 开放环境
    PROVIDERS=[
        ...PROVIDERS,
        // 自定义开发环境提供者
    ]
}
/**
 * 装饰器模块引用
 */
export const decorateModuleRef=_decorateModuleRef;
/**
 * 环境提供者
 */
export const ENV_PROVIDERS=[
    ...PROVIDERS
];