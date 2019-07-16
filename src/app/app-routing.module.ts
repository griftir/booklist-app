import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistsComponent } from './booklists/booklists.component';
import { BooklistStartComponent } from './booklists/booklist-start/booklist-start.component';
import { BooklistEditComponent } from './booklists/booklist-edit/booklist-edit.component';
import { BooklistDetailComponent } from './booklists/booklist-detail/booklist-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/booklists', pathMatch: 'full' },
  {
    path: 'booklists',
    component: BooklistsComponent,
    children: [
      { path: '', component: BooklistStartComponent },
      { path: 'new', component: BooklistEditComponent },
      { path: ':id', component: BooklistDetailComponent },
      { path: ':id/edit', component: BooklistEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
