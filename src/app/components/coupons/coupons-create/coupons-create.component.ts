import { Component, OnInit } from '@angular/core';
import { ApiDbJsonService } from 'src/app/services/api-db-json.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupons-create',
  templateUrl: './coupons-create.component.html',
  styleUrls: ['./coupons-create.component.scss']
})
export class CouponsCreateComponent implements OnInit {
  constructor(
    private apiDbJsonService: ApiDbJsonService,
    private snackBar: MatSnackBar,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  submitChange(data): void {
    this.apiDbJsonService.createCoupon(data).then(result => {
      this.snackBar.open('Cupom cadastrado com sucesso!')
      this.router.navigate(['/coupons/list'])
    }).catch(err => {
      this.snackBar.open('Ocorreu um erro no cadastro do cupom, entre em contato com o suporte po favor!')
    })
  }

}
