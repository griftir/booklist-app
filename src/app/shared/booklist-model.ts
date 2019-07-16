import { Book } from './book-model';

export class Booklist {
    constructor(public studentFirst: string, public studentLast: string, public books: Book[]) {}
}