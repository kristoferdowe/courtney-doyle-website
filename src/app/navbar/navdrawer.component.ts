import {
    Component,
    OnInit,
    AfterViewInit,
    HostBinding,
    Input,
    Output,
    EventEmitter
  } from "@angular/core";
  
  @Component({
    selector: "nav-drawer",
    templateUrl: "./navdrawer.component.html",
    styleUrls: ["./navdrawer.component.css"]
  })
  export class NavDrawerComponent implements OnInit {
    
    @Input()
    @HostBinding('class.drawer-open')
    isDrawerOpen: boolean;
  
    @Output()
    drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
    constructor() { }
  
    ngOnInit() {
    }
  
    onNavLinkClicked($event: MouseEvent) {
      this.isDrawerOpen = false;
      this.drawerToggleEmitter.emit(this.isDrawerOpen);
    }
  
  }