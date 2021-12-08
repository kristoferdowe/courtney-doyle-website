import { Injectable }  from '@angular/core';
import { WordListComponent }   from './word-list.component';
import { WordItem } from './word-item';




@Injectable()
export class WordService {
  getWords() {
    return [
      new WordItem(WordListComponent, { word: 'health' }),

      new WordItem(WordListComponent, { word: 'wellness' }),

      new WordItem(WordListComponent, { word: 'strength' }),

      new WordItem(WordListComponent, { word: 'balance' }),

   
    ];
  }
}