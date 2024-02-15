import { Injectable } from '@angular/core';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name: 'clean code',
        author: 'robert c martin',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,,203,200_.jpg',
        amount: 700
      },
      {
        name: 'pragmatic programmer',
        author: 'david thomas',
        image: 'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY425_.jpg',
        amount: 800
      },
      {
        name: 'art of computer programming',
        author: 'donald john fuller',
        image: 'https://m.media-amazon.com/images/I/719SYGJejmL._SY425_.jpg',
        amount: 18300
      },
      {
        name: 'introduction to algorithms',
        author: 't cormen',
        image: 'https://m.media-amazon.com/images/I/41vLer1KbmL._SX342_SY445_.jpg',
        amount: 1500
      }
    ];
  }
}
