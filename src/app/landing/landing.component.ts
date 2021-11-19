import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  public showPic!: number;
  public showMobile!: boolean;



  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Observes breakpoints for media queries

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
