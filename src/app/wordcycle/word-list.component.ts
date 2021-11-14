import { Component, Input } from '@angular/core';

import { WordComponent } from './word.component';

@Component({
  template: `<div class="word-list">
  <h3> {{data}}</h3>
  </div>

  `
})
export class WordListComponent implements WordComponent {
  @Input() data: any;

}




 