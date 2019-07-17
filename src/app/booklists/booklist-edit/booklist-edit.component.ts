import { Component, OnInit } from '@angular/core';
import { Booklist } from 'src/app/shared/booklist-model';
import { BooklistService } from '../booklist.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  Form
} from '@angular/forms';
import { MasterListService } from 'src/app/shared/masterlist.service';
import { Book } from 'src/app/shared/book-model';

@Component({
  selector: 'app-booklist-edit',
  templateUrl: './booklist-edit.component.html',
  styleUrls: ['./booklist-edit.component.css']
})
export class BooklistEditComponent implements OnInit {
  filteredStatus = ''; 
  booklistForm: FormGroup;
  masterlist: Book[];
  editMode = false;
  id: number;
  constructor(
    private booklistService: BooklistService,
    private masterlistService: MasterListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      console.log('edit mode is ', this.editMode, this.id);
    });
    this.initForm();
    this.masterlist = this.masterlistService.getMasterlist();
  }

  onEditBooklist() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteBooklist() {
    console.log('delete recipe');
  }
  onAddBook(index: number) {
    let {title, authorLast, authorFirst, isbn} = this.masterlist[index];
    (this.booklistForm.get('books') as FormArray).push(
      new FormGroup({
        title: new FormControl(title),
        authorLast: new FormControl(authorLast),
        authorFirst: new FormControl(authorFirst),
        isbn: new FormControl(isbn)
      })
    );
  }
  onDeleteBook(index: number) {
    (this.booklistForm.get('books') as FormArray).removeAt(index);
  }
  onSubmit() {
    console.log('submit');
    console.log(this.editMode);
    if (this.editMode) {
      this.booklistService.updateBooklist(this.id, this.booklistForm.value);
    } else {
      this.booklistService.addBooklist(this.booklistForm.value);
    }
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  private initForm() {
    console.log('initializing form');
    let studentFirst = '';
    let studentLast = '';
    const booksToAdd = new FormArray([]);

    if (this.editMode) {
      const booklist = this.booklistService.getBooklist(this.id);
      studentFirst = booklist.studentFirst;
      studentLast = booklist.studentLast;
      if (booklist.books) {
        for (const book of booklist.books) {
          console.log(book);
          booksToAdd.push(
            new FormGroup({
              title: new FormControl(book.title),
              authorLast: new FormControl(book.authorLast),
              authorFirst: new FormControl(book.authorFirst),
              isbn: new FormControl(book.isbn)
            })
          );
        }
      }
    }
    this.booklistForm = new FormGroup({
      studentFirst: new FormControl(studentFirst, Validators.required),
      studentLast: new FormControl(studentLast, Validators.required),
      books: booksToAdd
    });
  }
  getControls() {
    return (this.booklistForm.get('books') as FormArray).controls;
  }
}
