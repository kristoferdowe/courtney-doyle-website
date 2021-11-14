import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  
})


export class LandingComponent implements OnInit {
  public showMobile!: boolean;

 
  
 
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {


    
    //Observes breakpoints for media queries


   
    this.breakpointObserver
      .observe(['(min-width: 400px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showMobile = true;
        } else {
          this.showMobile = false;
        }
      });

       


    }};


      
    