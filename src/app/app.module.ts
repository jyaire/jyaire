import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactLineComponent } from './contact-line/contact-line.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { CreationComponent } from './creation/creation.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactLineComponent,
    MenuComponent,
    HomeComponent,
    PortfolioComponent,
    FooterComponent,
    ServicesComponent,
    PageNotFoundComponent,
    ContactComponent,
    CreationComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
