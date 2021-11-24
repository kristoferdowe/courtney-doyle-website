import { Component, OnInit } from '@angular/core';
import { BreakpointObserver , BreakpointState } from '@angular/cdk/layout';
import { WordService } from './word.service';
import { WordItem } from './word-item';

@Component({
  selector: 'word-banner',
  // templateUrl: './word-app.component.html',
  template: `
    <div>
      <app-word-banner [words]="words"></app-word-banner>
    </div>
  `
})
export class WordAppComponent implements OnInit {
  words: WordItem[] = [];
  


  constructor(
    private wordService: WordService ,
    public breakpointObserver: BreakpointObserver
    ) {}

  ngOnInit() {
    this.words = this.wordService.getWords();

  
  }
    
  }

