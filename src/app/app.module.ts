import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooklistsComponent } from './booklists/booklists.component';
import { BooklistListComponent } from './booklists/booklist-list/booklist-list.component';
import { BooklistItemComponent } from './booklists/booklist-list/booklist-item/booklist-item.component';
import { BooklistStartComponent } from './booklists/booklist-start/booklist-start.component';
import { BooklistEditComponent } from './booklists/booklist-edit/booklist-edit.component';
import { BooklistDetailComponent } from './booklists/booklist-detail/booklist-detail.component';
import { BooklistService } from './booklists/booklist.service';
import { MasterListService } from './shared/masterlist.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { AddBooksComponent } from './booklists/booklist-edit/add-books/add-books.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    BooklistsComponent,
    BooklistListComponent,
    BooklistItemComponent,
    BooklistStartComponent,
    BooklistEditComponent,
    BooklistDetailComponent,
    AddBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooklistService, MasterListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
