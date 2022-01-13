import {
    Component,
    OnInit,
    HostBinding,
    Input,
    Output,
    EventEmitter
  } from "@angular/core";

  import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
  import { ViewportScroller } from '@angular/common';
  @Component({
    selector: "nav-drawer",
    templateUrl: "./navdrawer.component.html",
    styleUrls: ["./navdrawer.component.css"]
  })


  export class NavDrawerComponent implements OnInit {
    public showNav!: number;
    

    @Input()
    @HostBinding('class.drawer-open')
    isDrawerOpen: boolean;
    
    @Output()
    drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
    constructor(public breakpointObserver: BreakpointObserver,
                private viewportScroller: ViewportScroller) { }
                public onClick(elementId: string): void { 
                this.viewportScroller.scrollToAnchor(elementId);
                
    }
     

    ngOnInit() {

    
      this.isDrawerOpen = false;
   
      
    this.breakpointObserver
    .observe(['(min-width: 0px) and (max-width: 767px) '])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showNav = 1;
      }
     
    });
    this.breakpointObserver
    .observe(['(min-width: 768px) and (max-width: 1023px) '])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showNav = 3;
      } 
      
    });
    this.breakpointObserver
    .observe(['(min-width: 1024px)  '])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showNav = 3;
      } 
    });
}
toggleNavDrawer(isDrawerOpen: boolean) {
  this.isDrawerOpen = isDrawerOpen;
  this.drawerToggleEmitter.emit(this.isDrawerOpen);
}
  }