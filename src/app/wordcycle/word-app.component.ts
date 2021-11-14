import { Component, OnInit } from '@angular/core';

import { WordService } from './word.service';
import { WordItem } from './word-item';

@Component({
  selector: 'word-banner',
  template: `
    <div>
      <app-word-banner [words]="words"></app-word-banner>
    </div>
  `
})
export class WordAppComponent implements OnInit {
  words: WordItem[] = [];

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.words = this.wordService.getWords();
  }
}
