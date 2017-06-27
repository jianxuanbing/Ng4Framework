import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInUp } from '../../utils/animations';
@Component({
    selector:'bg-demo-gallery',
    templateUrl:'./demo-gallery.component.html',
    styleUrls:['./demo-gallery.component.scss'],
    animations:[fadeInUp]
})
export class DemoGalleryComponent implements OnInit{
    @HostBinding('@fadeInUpState')
}