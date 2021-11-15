import { Injectable }  from '@angular/core';
import { WordListComponent }   from './word-list.component';
import { WordItem } from './word-item';




@Injectable()
export class WordService {
  getWords() {
    return [
      new WordItem ( WordListComponent, {word: 'breath'}),

      new WordItem ( WordListComponent, {word: 'passion'}),

       new WordItem ( WordListComponent,   {word: 'peace'}),

       new WordItem ( WordListComponent,   {word: 'life'}),
    ];
  }
}