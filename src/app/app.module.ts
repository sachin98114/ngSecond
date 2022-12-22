import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './page/content/content.component';
import { FooterComponent } from './page/footer/footer.component';
import { HadderComponent } from './page/hadder/hadder.component';
import { SidebarComponent } from './page/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    HadderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
