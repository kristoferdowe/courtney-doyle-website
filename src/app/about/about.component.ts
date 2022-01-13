import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;
  
  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }
 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['about']);
  }

}
