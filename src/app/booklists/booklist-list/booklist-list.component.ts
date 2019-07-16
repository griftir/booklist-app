import { Component, OnInit } from '@angular/core';
import { Booklist } from 'src/app/shared/booklist-model';
import { BooklistService } from '../booklist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booklist-list',
  templateUrl: './booklist-list.component.html',
  styleUrls: ['./booklist-list.component.css']
})
export class BooklistListComponent implements OnInit {
  booklists: Booklist[];
  subscription: Subscription;
  constructor(
    private booklistService: BooklistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.booklistService.booklistsChanged.subscribe((booklists:Booklist[])=> {
      this.booklists = booklists;
    }) 
    this.booklists = this.booklistService.getBooklists();
  }

  onNewBooklist(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
