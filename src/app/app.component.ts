import { Component, OnInit } from '@angular/core';
import { WordService } from './wordcycle/word.service';
import { WordItem } from './wordcycle/word-item';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <app-word-banner [words] = "words"></app-word-banner>
  
  `
,
 
})



export class AppComponent  {
  title = 'yoga1';
  // public showMobile!: boolean;
  // public showTablet!: boolean;
  // public showDesktop!: boolean;

constructor() {}

ngOnInit(): void {
  //Observes breakpoints for media queries

//   this.breakpointObserver
//     .observe(['(max-width: 320px)'])
//     .subscribe((state: BreakpointState) => {
//       if (state.matches) {
//         this.showMobile = true;
//       } else {
//         this.showMobile = false;
//       }
//     });
//     this.breakpointObserver
//     .observe(['(max-width: 768px )'])
//     .subscribe((state: BreakpointState) => {
//       if (state.matches) {
//         this.showTablet = true;
//       } else {
//         this.showTablet = false;
//       }
//     });
//     this.breakpointObserver
//     .observe(['(max-width: 1024px)'])
//     .subscribe((state: BreakpointState) => {
//       if (state.matches) {
//         this.showDesktop = true;
//       } else {
//         this.showDesktop = false;
//       }
//     });
// }
}}
 






