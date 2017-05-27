import { FormsModule } from '@angular/forms';
import { JsonViewModule } from './../../components/jsonView/jsonView.module';
import { DemoJsonViewComponent } from './demo-json-view.component';
import { NgModule } from '@angular/core';
@NgModule({
    declarations:[DemoJsonViewComponent],
    imports:[JsonViewModule,FormsModule],    
})
export class DemoJsonViewModule{}