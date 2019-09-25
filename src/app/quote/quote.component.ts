import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{

 quotes: Quote[]=[
  new Quote(1,'Get busy living or get busy dying.','-S.K',new Date(2019,8,25)),
  new Quote(2,'Monsters are, and ghosts are real too. They live inside us,and sometimes,they win.','-S.K',new Date(2019,8,25)),
  new Quote(3,'You have to stay faithful to what you are working on.','-S.K',new Date(2019,8,25)),

  //   new Quote(1,'Get busy living or get busy dying','-S.K'),
  //   new Quote(2,'Monsters are, and ghosts are real too. They live inside us,and sometimes,they win','-S.K'),
  //   new Quote(3,'You have to stay faithful to what you are working on','-S.K'),
 ];

 toggleDetails(i){
   this.quotes[i].showDescription = !this.quotes[i].showDescription; 
 }
 deleteQuote(isComplete, index){
   if (isComplete){
     let toDelete = confirm('Are you sure you want to delete this quote???')
     if (toDelete){
       this.quotes.splice(index,1);
     }
   }
 }

 constructor() { }

 ngOnInit() {
   }

}
