import { Component, OnInit } from '@angular/core';
import { Booklist } from 'src/app/shared/booklist-model';
import { BooklistService } from '../booklist.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MasterListService } from 'src/app/shared/masterlist.service';
import { Book } from 'src/app/shared/book-model';

@Component({
  selector: 'app-booklist-edit',
  templateUrl: './booklist-edit.component.html',
  styleUrls: ['./booklist-edit.component.css']
})
export class BooklistEditComponent implements OnInit {

  booklist: Booklist;
  masterlist: Book[];
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
      this.booklist = this.booklistService.getBooklist(this.id);
    });
    this.masterlist = this.masterlistService.getMasterlist();
  }

  onEditBooklist() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteBooklist(){
   console.log('delete recipe');
  }
}