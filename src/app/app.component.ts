import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote []
    // {id:1,name:'Get busy living or get busy dying'},
    // {id:2,name:'Monsters are, and ghosts are real too. They live inside us,and sometimes,they win'},
    // {id:3,name:'You have to stay faithful to what you are working on'},
}
