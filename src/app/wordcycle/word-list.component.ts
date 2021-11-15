import { Component, Input } from '@angular/core';

import { WordComponent } from './word.component';

@Component({
  template: `<div class="word-list"  >
  <p [style] = "{'font-size' : '5rem'}"> {{data}} </p>
  </div>
  `
})
export class WordListComponent implements WordComponent {
  @Input() data: any;

}




 