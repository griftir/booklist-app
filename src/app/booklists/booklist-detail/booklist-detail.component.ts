import { Component, OnInit } from '@angular/core';
import { Booklist } from 'src/app/shared/booklist-model';
import { BooklistService } from '../booklist.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-booklist-detail',
  templateUrl: './booklist-detail.component.html',
  styleUrls: ['./booklist-detail.component.css']
})
export class BooklistDetailComponent implements OnInit {
  booklist: Booklist;
  id: number;
  constructor(
    private booklistService: BooklistService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.booklist = this.booklistService.getBooklist(this.id);
    });
  }

  onEditBooklist() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteBooklist(){
   console.log('delete recipe');
  }
}
