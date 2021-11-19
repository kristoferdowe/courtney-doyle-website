import { Component, OnInit } from '@angular/core';
import { BreakpointObserver , BreakpointState } from '@angular/cdk/layout';
import { WordService } from './word.service';
import { WordItem } from './word-item';

@Component({
  selector: 'word-banner',
  template: `
    <div [className] = "!showMobile ? 'mobile' : 'desktop' ">
      <app-word-banner [words]="words"></app-word-banner>
    </div>
  `
})
export class WordAppComponent implements OnInit {
  words: WordItem[] = [];
  public showMobile!: boolean;

  constructor(
    private wordService: WordService ,
    public breakpointObserver: BreakpointObserver
    ) {}

  ngOnInit() {
    this.words = this.wordService.getWords();

    this.breakpointObserver
      .observe(['(min-width: 400px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showMobile = true;
        } else {
          this.showMobile = false;
        }
      });
  }
}
