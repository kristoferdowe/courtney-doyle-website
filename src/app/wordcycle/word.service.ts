import { Injectable }  from '@angular/core';
import { WordListComponent }   from './word-list.component';
import { WordItem } from './word-item';




@Injectable()
export class WordService {
  getWords() {
    return [
      new WordItem ( WordListComponent, {word: 'good'}),

      new WordItem ( WordListComponent, {word: 'great'}),

       new WordItem ( WordListComponent,   {word: 'fun'}),

       new WordItem ( WordListComponent,   {word: 'awesome'}),
    ];
  }
}