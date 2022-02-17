import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CouponsCreateComponent } from './components/coupons/coupons-create/coupons-create.component';
import { CouponsUpdateComponent } from './components/coupons/coupons-update/coupons-update.component';
import { GenerateComicsRareComponent } from './components/generate-comics-rare/generate-comics-rare.component';
import { KeysComponent } from './components/keys/keys.component';
import { KeysCreateComponent } from './components/keys/keys-create/keys-create.component';
import { KeysUpdateComponent } from './components/keys/keys-update/keys-update.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { CheckoutFinishedComponent } from './components/checkout/checkout-finished/checkout-finished.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ListComponent } from './components/comics/list.component';
import { PurchaseComponent } from './components/purchase/purchase.component';

const routes: Routes = [
  { path: '', redirectTo: '/comics/list', pathMatch: 'full' },
  { path: 'keys/list', component: KeysComponent },
  { path: 'keys/create', component: KeysCreateComponent },
  { path: 'keys/:id/update', component: KeysUpdateComponent },

  { path: 'comics/list', component: ListComponent, canActivate: [AuthGuardService] },
  { path: 'comics/purchase', component: PurchaseComponent, canActivate: [AuthGuardService] },
  { path: 'comics/favorites', component: FavoritesComponent, canActivate: [AuthGuardService] },
  { path: 'comics/:id/detail', component: DetailComponent, canActivate: [AuthGuardService] },
  { path: 'comics/:id/checkout', component: CheckoutComponent, canActivate: [AuthGuardService] },
  { path: 'comics/:id/checkout/finished', component: CheckoutFinishedComponent, canActivate: [AuthGuardService] },
  { path: 'comics/generate-rare', component: GenerateComicsRareComponent, canActivate: [AuthGuardService] },
  { path: 'coupons/list', component: CouponsComponent, canActivate: [AuthGuardService] },
  { path: 'coupons/create', component: CouponsCreateComponent, canActivate: [AuthGuardService] },
  { path: 'coupons/:id/update', component: CouponsUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'coupons/:id/update', component: CouponsUpdateComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
