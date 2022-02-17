import { Component, OnInit } from '@angular/core';
import { ApiCouponService } from 'src/app/services/api-coupon.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coupons-update',
  templateUrl: './coupons-update.component.html',
  styleUrls: ['./coupons-update.component.scss']
})
export class CouponsUpdateComponent implements OnInit {
  public id = null;
  constructor(
    private apiCouponService: ApiCouponService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  submitChange(data): void {
    this.apiCouponService.updateCoupon(this.id, data)
      .then(result => {
        this.snackBar.open('Cupom atualizado com sucesso!')
        this.router.navigate(['/coupons/list'])
      })
      .catch(error => {
        if (error.message) {
          this.snackBar.open(error.message, 'Erro', { duration: 8000 })
        } else {
          this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
        }
      })
  }
}
