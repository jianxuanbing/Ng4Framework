import { Injectable, Renderer2 } from '@angular/core';
/**
 * Dom节点渲染器
 * @export
 * @class DomRenderer
 */
@Injectable()
export class DomRenderer{
    constructor(private renderer2:Renderer2){}

    /**
     * 添加样式
     * @param {*} dom Dom节点
     * @param {string} className 样式名
     * 
     * @memberof DomRenderer
     */
    public addClass(dom:any,className:string):void{
        const classes=className.split(/\s+/);
        for(const cName of classes){
            this.renderer2.addClass(dom,cName);
        }
    }

    /**
     * 移除样式
     * @param {*} dom Dom节点
     * @param {string} className 样式名
     * 
     * @memberof DomRenderer
     */
    public removeClass(dom:any,className:string):void{
        const classes=className.split(/\s+/);
        for(const cName of classes){
            this.renderer2.removeClass(dom,cName);
        }
    }

    /**
     * 添加前缀
     * @param {*} element 元素
     * @param {*} attr 属性
     * @param {*} value 值
     * 
     * @memberof DomRenderer
     */
    public addPrefix(element:any,attr:any,value:any):void{
        const prefix=['webkit','moz','o','ms'];
        let uattr=attr.split('');
        uattr[0]=uattr[0].toUpperCase();
        uattr=uattr.join('');
        prefix.forEach(function(x){
            element.style[x+uattr]=value;
        });
        element.style[attr]=value;
    }
    /**
     * 开启全屏模式，改变窗口大小
     * @param {*} [elem=document.documentElement] 元素
     * 
     * @memberof DomRenderer
     */
    public toggleFullScreen(elem:any=document.documentElement):void{
        if(!document.fullscreenElement&&!document.webkitFullscreenElement){
            const docElm=elem;
            if(docElm.requestFullscreen){
                docElm.requestFullscreen();
            }else if(docElm.mozRequestFullScreen){
                docElm.mozRequestFullScreen();
            }else if(docElm.webkitRequestFullScreen){
                docElm.webkitRequestFullScreen();
            }else if(docElm.msRequestFullscreen){
                docElm.msRequestFullscreen();
            }
        }else{
            if(document.exitFullscreen){
                document.exitFullscreen();
            }else if(document.webkitCancelFullScreen){
                document.webkitCancelFullScreen();
            }
        }
    }

    /**
     * 获取样式
     * @param {*} dom Dom元素
     * @param {string} attr 样式属性
     * 
     * @memberof DomRenderer
     */
    public getStyle(dom:any,attr:string){
        return dom.currentStyle?dom.currentStyle[attr]:getComputedStyle(dom,'false')[attr];
    }

    /**
     * 获取随机数
     * @param {number} max 最大值
     * @param {number} min 最小值
     * @returns {number} 
     * 
     * @memberof DomRenderer
     */
    public getRandom(max:number,min:number):number{
        min=arguments[1]||0;
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    /**
     * 获取浏览器类型
     * @returns {string} 
     * 
     * @memberof DomRenderer
     */
    public getWebType():string{
        const type=['webkit','moz','o','ms'];
        let cur='';
        type.forEach(function(t){
            const mo=t+"Transform";
            if(mo in document.createElement('div').style){
                cur=t;
            }
        });
        return cur;
    }
    /**
     * 获取矩形位置
     * @param {*} dom 元素
     * @returns {*} 
     * 
     * @memberof DomRenderer
     */
    public getRect(dom:any):any{
        return dom.getBoundingClientRect();
    }

    /**
     * 淡入
     * @param {*} element 元素
     * @param {number} duration 持续时间
     * 
     * @memberof DomRenderer
     */
    public fadeIn(element:any,duration:number):void{
        element.style.opacity=0;
        let last=+new Date();
        let opacity=0;
        const tick=function(){
            opacity=+element.style.opacity+(new Date().getTime()-last)/duration;
            element.style.opacity=opacity;
            last=+new Date();
            if(+opacity<1){
                (window.requestAnimationFrame&&requestAnimationFrame(tick))||setTimeout(tick,16);
            }
        };
        tick();
    }

    /**
     * 淡出
     * @param {*} element 元素
     * @param {number} duration 持续时间
     * 
     * @memberof DomRenderer
     */
    public fadeOut(element:any,duration:number):void{
        let opacity=1;
        const interval=50,gap=interval/duration;

        const fading=setInterval(()=>{
            opacity=opacity-gap;
            if(opacity<=0){
                opacity=0;
                clearInterval(fading);
            }
            element.style.opacity=opacity;
        },interval);
    }

    /**
     * 设置样式属性
     * @param {*} dom 元素
     * @param {*} style 样式
     * 
     * @memberof DomRenderer
     */
    public css(dom:any,style:any):void{
        for(const s in style){
            dom.style[s]=style[s];
        }
    }

    /**
     * 设置结束动画
     * @param {*} elem 元素
     * @param {*} handler 结束动画处理
     * 
     * @memberof DomRenderer
     */
    public animationEnd(elem:any,handler:any):void{
        elem.addEventListener('animationend', handler, false);
        elem.addEventListener('webkitAnimationEnd', handler, false);
        elem.addEventListener('mozAnimationEnd', handler, false);
        elem.addEventListener('OAnimationEnd', handler, false);
    }

    /**
     * 设置变形
     * @param {*} element 元素
     * @param {*} animation 动画
     * 
     * @memberof DomRenderer
     */
    public setTransform(element:any,animation:any):void{
        element.style.webkitTransform = animation;
        element.style.mozTransform = animation;
        element.style.oTransform = animation;
        element.style.msTransform = animation;
        element.style.transform = animation;
    }
    /**
     * 设置过渡时间
     * @param {*} element 元素
     * @param {*} times 过渡时间
     * 
     * @memberof DomRenderer
     */
    public setTransitionDuration(element:any,times:any):void{
        element.style.webkitTransitionDuration = times + 'ms';
        element.style.mozTransitionDuration = times + 'ms';
        element.style.oTransitionDuration = times + 'ms';
        element.style.transitionDuration = times + 'ms';
    }

    /**
     * 设置结束过渡动画
     * @param {*} elem 元素
     * @param {*} handler 结束过渡动画处理 
     * 
     * @memberof DomRenderer
     */
    public transitionEnd(elem:any,handler:any):void{
        elem.addEventListener('transitionend', handler, false);
        elem.addEventListener('webkitTransitionEnd', handler, false);
        elem.addEventListener('mozTransitionEnd', handler, false);
        elem.addEventListener('oTransitionEnd', handler, false);
    }

    /**
     * 删除结束过渡动画
     * @param {*} elem 元素
     * @param {*} handler 结算过渡动画处理
     * 
     * @memberof DomRenderer
     */
    public deleteTransitionEnd(elem:any, handler:any): void {
        elem.removeEventListener('transitionend', handler, false);
        elem.removeEventListener('webkitTransitionEnd', handler, false);
        elem.removeEventListener('mozTransitionEnd', handler, false);
        elem.removeEventListener('oTransitionEnd', handler, false);
    }

    /**
     * 检查平台
     * @returns {*} 
     * 
     * @memberof DomRenderer
     */
    public checkPlatform(): any {
        let userAngent = '', isMobile = false;
        const mobile = /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/;
        if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (mobile.test(navigator.userAgent))) {
        try {
                if (/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                userAngent = 'mobile';
                } else if (/iPad/i.test(navigator.userAgent)) {
                userAngent = 'ipad';
                }
                isMobile = true;
            } catch (e) {}
        } else {
            isMobile = false;
            userAngent = 'window';
        };

        return {
            platform: userAngent,
            isMobile: isMobile
        };
    }
}