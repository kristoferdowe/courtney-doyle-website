import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-biocomponent',
  templateUrl: './biocomponent.component.html',
  styleUrls: ['./biocomponent.component.css']
})
export class BiocomponentComponent implements OnInit {
  public showBioMedia!: number;
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(min-width: 0px) and (max-width: 767px) '])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showBioMedia = 1;
      }
     
    });
    this.breakpointObserver
    .observe(['(min-width: 768px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showBioMedia = 2;
      } 
      
    });
    // this.breakpointObserver
    // .observe(['(min-width: 1024px)  '])
    // .subscribe((state: BreakpointState) => {
    //   if (state.matches) {
    //     this.showBioMedia = 3;
    //   } 
    // });
  }

}
