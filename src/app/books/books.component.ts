import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  constructor(
    private booksService: BooksService
  ){
    // console.log({"constructor": "constructor"});
  }
  books: Book[] = [];

  cart : Book[] = [];

  // isDisabled: boolean = false;
  isShowing: boolean = true;
  myName: string = '';
  

  ngOnInit(): void {
    // console.log({"oninit": "OnInit"});
    this.books = this.booksService.getBooks();
  }

  // handleClick(){
  //   // alert('I am working!');
  //   this.isDisabled = true;
  // }

  // toggleBooks(){
  //   this.isShowing = !this.isShowing;
  // }

  addToCart(book: Book){
    console.log(book);
  }
}
