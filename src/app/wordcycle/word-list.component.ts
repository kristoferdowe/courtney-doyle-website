import { Component, Input,  OnInit, } from '@angular/core';

import { WordComponent } from './word.component';
import { BreakpointObserver , BreakpointState } from '@angular/cdk/layout';


@Component({

  template: `<div class="word-list"  >
  <p [ngClass]="showPic === 1 ? 'show-mobile-word' : 'hidden'" [style] = "{'font-size' : '5rem'}"> {{data}} </p>
  </div>
  `
})
export class WordListComponent implements WordComponent {
  @Input() data: any;
  public showPic!: number;





constructor(
  public breakpointObserver: BreakpointObserver
) {}


 ngOnInit() : void {
  this.breakpointObserver
  .observe(['(min-width: 0px) and (max-width: 767px) '])
  .subscribe((state: BreakpointState) => {
    if (state.matches) {
      this.showPic = 1;
    }
   
  });
  this.breakpointObserver
  .observe(['(min-width: 768px) and (max-width: 1023px) '])
  .subscribe((state: BreakpointState) => {
    if (state.matches) {
      this.showPic = 2;
    } 
    
  });
  this.breakpointObserver
  .observe(['(min-width: 1024px)  '])
  .subscribe((state: BreakpointState) => {
    if (state.matches) {
      this.showPic = 3;
    } 
  });
 }
}