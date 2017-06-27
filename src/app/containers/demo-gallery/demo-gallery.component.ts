import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInUp } from '../../utils/animations';
@Component({
    selector:'bg-demo-gallery',
    templateUrl:'./demo-gallery.component.html',
    styleUrls:['./demo-gallery.component.scss'],
    animations:[fadeInUp]
})
export class DemoGalleryComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    images:any[]=[];

    constructor(){}

    ngOnInit() {
        this.images=[
            {'src':'assets/images/001.jpg','alt':'image','highlight':true},
            {'src':'assets/images/001.jpg','alt':'image','highlight':true},
            {'src':'assets/images/001.jpg','alt':'image','highlight':true},
            {'src':'assets/images/001.jpg','alt':'image','highlight':true},
            {'src':'assets/images/001.jpg','alt':'image','highlight':true},
            {'src':'assets/images/001.jpg','alt':'image','highlight':true},
            {'src':'assets/images/001.jpg','alt':'image','highlight':true},
        ];
    }
}