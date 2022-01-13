import { Injectable }  from '@angular/core';
import { WordListComponent }   from './word-list.component';
import { WordItem } from './word-item';




@Injectable()
export class WordService {
  getWords() {
    return [
      

      new WordItem(WordListComponent, { word: 'reiki' }),

      new WordItem(WordListComponent, { word: 'yoga therapy' }),

      new WordItem(WordListComponent, { word: `children's yoga` }),

      new WordItem(WordListComponent, { word: 'recovery yoga' }),

      new WordItem(WordListComponent, { word: 'coaching' }),

      new WordItem(WordListComponent, { word: 'holistic work' }),

      new WordItem(WordListComponent, { word: 'private yoga' }),

      new WordItem(WordListComponent, { word: 'meditation' }),

      new WordItem(WordListComponent, { word: 'breathwork' }),

      new WordItem(WordListComponent, { word: 'mindfulness' }),

       
   
    ];
  }
}