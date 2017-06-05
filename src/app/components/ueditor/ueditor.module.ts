import { UEditorConfig } from './ueditor.config';
import { CommonModule } from '@angular/common';
import { NgModule,ModuleWithProviders } from '@angular/core';
import { UEditorComponent } from './ueditor.component';
import { UEditorService } from './ueditor.service';
@NgModule({
    imports:[CommonModule],
    providers:[UEditorService],
    exports:[UEditorComponent],
    declarations:[UEditorComponent]
})
export class UEditorModule{
    static forRoot(config:UEditorConfig):ModuleWithProviders{
        return{
            ngModule:UEditorModule,
            providers:[
                {
                    provide:UEditorConfig,
                    useValue:config
                }
            ]
        };
    }    
}