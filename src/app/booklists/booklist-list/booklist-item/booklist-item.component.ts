import { Component, OnInit, Input } from '@angular/core';
import { Booklist } from 'src/app/shared/booklist-model';

@Component({
  selector: 'app-booklist-item',
  templateUrl: './booklist-item.component.html',
  styleUrls: ['./booklist-item.component.css']
})
export class BooklistItemComponent implements OnInit {
@Input() booklist: Booklist;
@Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
