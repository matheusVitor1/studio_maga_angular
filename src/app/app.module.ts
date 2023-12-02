import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLoggedOutComponent } from './header-logged-out/header-logged-out.component';
import { HomeComponent } from './home/home.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { AboutSectionComponent } from './home/about-section/about-section.component';
import { PortfolioSectionComponent } from './home/portfolio-section/portfolio-section.component';
import { CtaSectionComponent } from './home/cta-section/cta-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoggedOutComponent,
    HomeComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    PortfolioSectionComponent,
    CtaSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
