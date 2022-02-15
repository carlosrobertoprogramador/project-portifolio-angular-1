import { Component, OnInit } from '@angular/core';
import { ApiDbJsonService } from 'src/app/services/api-db-json.service';
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
    private apiDbJsonService: ApiDbJsonService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  submitChange(data): void {
    this.apiDbJsonService.updateCoupon(this.id, data).then(result => {
      this.snackBar.open('Cupom atualizado com sucesso!')
      this.router.navigate(['/coupons/list'])
    }).catch(err => {
      this.snackBar.open('Ocorreu um erro na atualização do cupom, entre em contato com o suporte po favor!')
    })
  }
}
