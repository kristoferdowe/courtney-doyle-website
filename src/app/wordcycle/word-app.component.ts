import { Component, OnInit } from '@angular/core';
import { WordService } from './word.service';
import { WordItem } from './word-item';
import { BreakpointObserver , BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'word-banner',
   templateUrl: './word-app.component.html',
  // template: `
  //   <div>
  //     <app-word-banner [words]="words"  ></app-word-banner>
  //   </div>
  // `
})
export class WordAppComponent implements OnInit {
  words: WordItem[] = [];
 
  public showPic!: number;
  


  constructor(
    private wordService: WordService ,
    public breakpointObserver: BreakpointObserver,
    
    ) {}

  ngOnInit() : void {
    this.words = this.wordService.getWords();

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
    
  

