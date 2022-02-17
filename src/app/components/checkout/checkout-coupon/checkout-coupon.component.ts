import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiCouponService } from 'src/app/services/api-coupon.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Coupon } from './../../../classes/coupon';

@Component({
  selector: 'app-checkout-coupon',
  templateUrl: './checkout-coupon.component.html',
  styleUrls: ['./checkout-coupon.component.scss']
})
export class CheckoutCouponComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() rare: boolean;

  constructor(
    private apiCouponService: ApiCouponService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  validateCoupon(value) {
    this.apiCouponService.getCouponByName(this.form.get('coupon').value)
      .then(result => {
        if (result.length > 0) {
          const coupon: Coupon = result[0]
          if (this.rare && coupon.type === 'common') {
            this.form.get('discount').setValue(0)
            this.snackBar.open('O cupom do tipo commum não é válido para este quadrinho raro!', 'Atenção', {
              duration: 3000
            })
          } else {
            this.form.get('discount').setValue(coupon.value)
            this.snackBar.open('Cupom vinculado com sucesso!', 'Sucesso', {
              duration: 3000
            })
          }

        } else {
          this.form.get('discount').setValue(0)
          this.snackBar.open('Não existe este cupom vigente!', 'Atenção', {
            duration: 3000
          })
        }
      }).catch(error => {
        this.form.get('discount').setValue(0)
        if (error.message) {
          this.snackBar.open(error.message, 'Erro', { duration: 8000 })
        } else {
          this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
        }
      })
  }

}
