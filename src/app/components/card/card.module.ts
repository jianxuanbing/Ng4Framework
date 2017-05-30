import { CardComponent } from './card.component';
import { CardHeaderTextComponent } from './header/cardHeaderText.component';
import { CardHeaderComponent } from './header/cardHeader.component';
import { CardMediaComponent } from './media/cardMedia.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardContentComponent } from './content/cardContent.component';
import { CardFooterComponent } from './footer/cardFooter.component';
@NgModule({
    imports:[CommonModule],
    declarations:[CardMediaComponent,CardHeaderComponent,CardHeaderTextComponent,CardContentComponent,CardFooterComponent,CardComponent],
    exports:[CardMediaComponent,CardHeaderComponent,CardHeaderTextComponent,CardContentComponent,CardFooterComponent,CardComponent]
})
export class CardModule{}