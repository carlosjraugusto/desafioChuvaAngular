import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenusidebarComponent } from './menusidebar/menusidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontComponent } from './font/font.component';
import { FontmidComponent } from './fontmid/fontmid.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusidebarComponent,
    NavBarComponent,
    FontComponent,
    FontmidComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
