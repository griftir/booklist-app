import { Booklist } from '../shared/booklist-model';
import { Book } from '../shared/book-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MasterListService {
  masterlistChanged = new Subject<Booklist[]>();
  private masterList: Book[] = [
    new Book('Chicken tendie book', 'Robertson', 'Chase', '84238942389'),
    new Book('How to train your cat', 'Tibbles', 'Steven', 'lkjlk238389'),
    new Book('Youre a pedophile', 'Dickbutt', 'Major', '987123798'),
    new Book('Hello there', 'Kenobi', 'Ben', '8988989843'),
    new Book('Go away', 'Clinton', 'Bill', '89897u124')
  ];

  getMasterlist() {
    return this.masterList.slice();
  }
}
