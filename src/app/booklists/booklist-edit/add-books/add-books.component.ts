import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../../booklist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterListService } from 'src/app/shared/masterlist.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(private booklistService: BooklistService,
    private masterlistService: MasterListService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
