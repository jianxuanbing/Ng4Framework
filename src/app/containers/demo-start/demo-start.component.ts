import { config } from './../../common/config';
import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector: 'bg-demo-start',
    templateUrl: './demo-start.component.html',
    styleUrls: ['./demo-start.component.scss'],
    animations: [fadeInUp]
})
export class DemoStartComponent implements OnInit {
    @HostBinding('@fadeInUpState') fadeInUpState: any;
    @HostBinding('style.display') dispaly = 'block';
    menus: any;
    version: string;
    constructor() { }

    ngOnInit() {
        this.version = config.version;
        this.menus = [
            {
                title: 'bgng',
                expanded: true,
                folder: [
                    {
                        title:'config',
                        expanded:false,
                        folder:[
                            {
                                title:'html-elements-plugin',
                                expanded:false,
                                file:[
                                    {title:'index.js'}
                                ]
                            }
                        ],
                        file:[
                            {title:'helper.js'},
                            {title:'webpack.common.js'},
                            {title:'webpack.dev.js'},
                            {title:'webpack.prod.js'}
                        ]
                    },
                    {
                        title: 'src',
                        expanded: true,
                        folder: [
                            {
                                title: 'app',
                                folder: [
                                    { title: 'common', file: [{ title: 'config.ts' }] },
                                    { title: 'component' },
                                    { title: 'main' },
                                    { title: 'modules', file: [{ title: 'app-routing.module.ts' }, { title: 'main.module.ts' }] }
                                ],
                                file: [
                                    { title: 'app.module.ts' },
                                    { title: 'app.component.scss' },
                                    { title: 'app.component.ts' },
                                    { title: 'app.component.html' }
                                ]
                            },
                            {
                                title: 'assets'
                            },
                            {
                                title: 'environments'
                            }
                        ],
                        file: [
                            { title: 'favicon.icon' },
                            { title: 'index.html' },
                            { title: 'main.ts' },
                            { title: 'polyfills.ts' },
                            { title: 'styles.css' },
                            { title: 'tsconfig.app.json' },
                            { title: 'typings.d.ts' }
                        ]
                    }
                ],
                file: [
                    {
                        title: '.angular-cli.json'
                    },
                    {
                        title: '.editorconfig'
                    },
                    {
                        title: '.gitignore'
                    },
                    {
                        title: 'package.json'
                    },
                    {
                        title: 'README.md'
                    },
                    {
                        title: 'tsconfig.json'
                    }
                ]
            }
        ]
    }
}