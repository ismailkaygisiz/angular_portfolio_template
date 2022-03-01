import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404Component } from './components/error404/error404.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './components/start/start.component';
import { AboutComponent } from './components/about/about.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { MediaComponent } from './components/media/media.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Error404Component,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    StartComponent,
    AboutComponent,
    DiscoverComponent,
    MediaComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
