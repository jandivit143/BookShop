import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit { // try implementing OnDestroy and uncomment the myInterval commented code
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();
  isInCart: boolean = false;
  // myInterval: any = null;
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    // this.myInterval = setInterval(() => {
    //   console.log('Hello');
    // },1000);
  }

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.myInterval);
  //   console.log({onDestroy: "ngOnDestroy"});
  // }
}
