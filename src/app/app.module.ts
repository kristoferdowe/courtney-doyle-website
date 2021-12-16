import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LandingComponent } from './landing/landing.component';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';

import { WordBannerComponent } from './wordcycle/word-banner.component';
import { WordListComponent } from './wordcycle/word-list.component';
import { WordDirective } from './wordcycle/word.directive';
import { WordService } from './wordcycle/word.service';
import { WordAppComponent } from './wordcycle/word-app.component';

import { Routes, RouterModule } from '@angular/router';
import { NavBarModule } from './navbar/nav-bar.module';

import { NavBarComponent } from './navbar/navbar.component';
import { BiocomponentComponent } from './biocomponent/biocomponent.component';
import { FormpageComponent } from './formpage/formpage.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'about-component' , component: AboutComponent } 
];
@NgModule({
  imports: [BrowserModule, LayoutModule, HttpClientModule, NavBarModule, RouterModule.forRoot(routes) ],
  providers: [WordService],
  declarations: [
    AppComponent,
    //main screen components
    SplashScreenComponent,
    LandingComponent,
   

    //word cycle components
    WordBannerComponent,
    WordListComponent,
    WordDirective,
    WordAppComponent,
    BiocomponentComponent,
    FormpageComponent,
    AboutComponent,
  ],
  entryComponents: [WordListComponent],
  bootstrap: [AppComponent],
  exports:[ RouterModule],
})
export class AppModule {
  constructor() {}
}
