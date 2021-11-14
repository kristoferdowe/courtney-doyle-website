import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';




import { WordBannerComponent } from './wordcycle/word-banner.component';
import { WordListComponent } from './wordcycle/word-list.component';
import { WordDirective } from './wordcycle/word.directive';
import { WordService } from './wordcycle/word.service';
import { WordAppComponent } from './wordcycle/word-app.component';










@NgModule({
  imports: [
   BrowserModule,
   LayoutModule,
   HttpClientModule
  ],
  providers: [WordService],
  declarations: [
            AppComponent,
            //main screen components
            SplashScreenComponent,
            LandingComponent,
            NavbarComponent,
            //word cycle components
            WordBannerComponent,
            WordListComponent,
            WordDirective,
            WordAppComponent
  ],
  entryComponents: [WordListComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
 }
