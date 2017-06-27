import { DemoUEditorComponent } from './demo-ueditor.component';
import { FormsModule } from '@angular/forms';
import { UEditorModule } from './../../components/ueditor/ueditor.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UEditorModule.forRoot({
            path:'plugins/ueditor/',
            options:{
                themePath:'/plugins/ueditor/themes/'
            }
        })
    ],
    declarations:[
        DemoUEditorComponent
    ]
})
export class DemoUEditorModule{}