// import { config } from './../../common/config';
// import { NotifyServiceConfig } from './notify.service.config';
// import { NotifyHolderComponent } from './notify-holder.component';
// import { NotifyIcons,defaultIcons } from './interfaces/notify-icons';
// import { NotifyEvent } from './interfaces/notify-event';
// import { Subject } from 'rxjs/Subject';
// import { Injectable, Optional, ComponentFactoryResolver, ApplicationRef,Injector } from '@angular/core';
// @Injectable()
// export class NotifyService{
//     private emitter:Subject<NotifyEvent>=new Subject<NotifyEvent>();
//     private icons:NotifyIcons=defaultIcons;
//     private notifyHolderComponent:NotifyHolderComponent;
//     private container:HTMLElement;

//     constructor(private resolver:ComponentFactoryResolver,
//         private applicationRef:ApplicationRef,
//         private injector:Injector,
//         @Optional() private config:NotifyServiceConfig){
//             if(config){
//                 this.container=config.container;
//             }
//         }

// }