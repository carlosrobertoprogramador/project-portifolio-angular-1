import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/comics/list/list.component';
import { DetailComponent } from './components/comics/detail/detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CouponsCreateComponent } from './components/coupons/coupons-create/coupons-create.component';
import { CouponsUpdateComponent } from './components/coupons/coupons-update/coupons-update.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'comic/list', component: ListComponent },
  { path: 'comic/:id/detail', component: DetailComponent },
  { path: 'comic/:id/checkout', component: CheckoutComponent },
  { path: 'coupons/list', component: CouponsComponent },
  { path: 'coupons/create', component: CouponsCreateComponent },
  { path: 'coupons/:id/update', component: CouponsUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
