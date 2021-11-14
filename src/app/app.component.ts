import { Component, OnInit } from '@angular/core';
import { WordService } from './wordcycle/word.service';
import { WordItem } from './wordcycle/word-item';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <app-word-banner [words] = "words"></app-word-banner>
  
  `
,
 
})
export class AppComponent  {
  title = 'yoga1';
 
}





