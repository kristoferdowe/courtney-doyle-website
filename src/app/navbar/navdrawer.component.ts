import {
    Component,
    OnInit,
    HostBinding,
    Input,
    Output,
    EventEmitter
  } from "@angular/core";

  import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
  
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
  
    constructor(public breakpointObserver: BreakpointObserver) { }
  
    ngOnInit() {
    
  
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
        this.showNav = 2;
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
  }