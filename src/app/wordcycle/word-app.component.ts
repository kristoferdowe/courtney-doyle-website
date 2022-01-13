import { Component, OnInit } from '@angular/core';
import { WordService } from './word.service';
import { WordItem } from './word-item';
import { BreakpointObserver , BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'word-banner',
   templateUrl: './word-app.component.html',
 
})
export class WordAppComponent implements OnInit {
  words: WordItem[] = [];
 
  public showWordList!: number;;
  


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
        this.showWordList = 1;
      }
     
    });
    this.breakpointObserver
    .observe(['(min-width: 768px) and (max-width: 1023px) '])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showWordList = 2;
      } 
      
    });
    this.breakpointObserver
    .observe(['(min-width: 1024px)  '])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showWordList = 3;
      } 
    });

  }
}
    
  

