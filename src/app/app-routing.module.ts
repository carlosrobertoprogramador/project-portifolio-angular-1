import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/comics/list/list.component';
import { DetailComponent } from './components/comics/detail/detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'comic/list', component: ListComponent },
  { path: 'comic/:id/detail', component: DetailComponent },
  { path: 'comic/:id/checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
