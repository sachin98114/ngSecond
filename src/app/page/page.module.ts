import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HadderComponent } from './hadder/hadder.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    HadderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageModule { }
