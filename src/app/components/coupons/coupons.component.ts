import { Component, OnInit } from '@angular/core';
import { ApiCouponService } from 'src/app/services/api-coupon.service';
import { Coupon } from './../../classes/coupon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'type', 'value', 'actions'];
  coupons: Coupon[];

  constructor(
    private snackBar: MatSnackBar,
    private apiCouponService: ApiCouponService,
  ) { }

  ngOnInit(): void {
    this.apiCouponService.getCoupons().then(coupons => {
      this.coupons = coupons;
    })
  }

  remove(id) {

    this.apiCouponService.removeCoupon(id).then(result => {
      this.coupons = this.coupons.filter((coupon) => {
        return coupon.id != id
      })
    }).catch(err => {
      this.snackBar.open('Erro interno, contate o suporte por favor!')
    })

  }

}
