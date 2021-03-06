import { Component, OnInit } from '@angular/core';
import { ApiCouponService } from 'src/app/services/api-coupon.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupons-create',
  templateUrl: './coupons-create.component.html',
  styleUrls: ['./coupons-create.component.scss']
})
export class CouponsCreateComponent implements OnInit {
  constructor(
    private apiCouponService: ApiCouponService,
    private snackBar: MatSnackBar,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  submitChange(data): void {
    this.apiCouponService.createCoupon(data)
      .then(result => {
        this.snackBar.open('Cupom cadastrado com sucesso!')
        this.router.navigate(['/coupons/list'])
      }).catch(error => {
        if (error.message) {
          this.snackBar.open(error.message, 'Erro', { duration: 8000 })
        } else {
          this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
        }      })
  }

}
