import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    FooterMainComponent,
    Page1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
