import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { NavBarComponent } from './navbar.component';
import { NavDrawerComponent } from './navdrawer.component';


@NgModule({
  
  declarations: [NavBarComponent,
  NavDrawerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent]
})
export class NavBarModule { }
