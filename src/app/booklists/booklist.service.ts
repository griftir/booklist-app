import { Booklist } from '../shared/booklist-model';
import { Book } from '../shared/book-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BooklistService {
  booklistsChanged = new Subject<Booklist[]>();
  private booklists: Booklist[] = [
    new Booklist('William', 'Magno', [
      new Book('How to Poop', 'Smith', 'Jodn', 'T8928')
    ]),
    new Booklist('Sarah', 'Magno', [
      new Book('How to Pee', 'Jerkface', 'Billy', 'T8928'),
      new Book('How to Pee', 'Jerkface', 'Billy', 'T8928'),
      new Book('How to Pee', 'Jerkface', 'Billy', 'T8928'),
      new Book('How to Pee', 'Jerkface', 'Billy', 'T8928')
    ])
  ];

  getBooklists() {
    return this.booklists.slice();
  }

  getBooklist(id: number) {
    return this.booklists[id];
  }
  addBooklist(booklist: Booklist){
    this.booklists.push(booklist);
    this.booklistsChanged.next(this.booklists.slice());
  }
  updateBooklist(index: number, newBooklist: Booklist){
    this.booklists[index] = newBooklist;
    this.booklistsChanged.next(this.booklists.slice());
  }

  deleteBooklist(index: number){
    this.booklists.splice(index,1);
    this.booklistsChanged.next(this.booklists.slice()) 
  }
}
