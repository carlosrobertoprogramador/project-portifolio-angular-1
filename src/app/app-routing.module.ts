import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/comics/list/list.component';
import { DetailComponent } from './components/comics/detail/detail.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'comic/list', component: ListComponent },
  { path: 'comic/detail/:id', component: DetailComponent },
  { path: 'comic/checkout/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
