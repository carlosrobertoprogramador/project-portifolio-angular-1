import { Component, OnInit } from '@angular/core';
import { Comic, ComicPrice } from './../../classes/comic';
import { ApiMarvelService } from '../../services/api-marvel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from './../../services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiComicService } from './../../services/api-comic.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public id = null;
  public comic: Comic;
  public rare: boolean = false;
  public form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private storageService: StorageService,
    private apiMarvelService: ApiMarvelService,
    private apiComicService: ApiComicService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();

    const comicsRares: any = this.storageService.getStorage('comicsRares');

    this.id = this.activatedRoute.snapshot.params.id;

    this.apiMarvelService.getComic(this.id).then((comic => {
      if (comicsRares && comicsRares.includes(comic.id)) {
        this.rare = true;
      } else {
        this.rare = false;
      }
      this.comic = comic;
      this.form.get('price').setValue(this.getPrice(comic.prices))
    })).catch((error => {
      if (error.message) {
        this.snackBar.open(error.message, 'Erro', { duration: 8000 })
      } else {
        this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
      }
    }));

  }

  createForm() {
    return this.builder.group({
      coupon: ['', []],
      methodPayment: ['', Validators.required],
      methodPaymentCard: ['', []],
      installmentPaymentCard: ['', []],
      cardNumber: ['', []],
      price: [0, []],
      discount: [0, []],
    });
  }

  getPrice(prices: ComicPrice[]): number {
    return prices.find((price => {
      return price.type == "printPrice";
    })).price
  }

  paymentChange(event): void {
    this.addPurchase().then(result => {
      this.snackBar.open('Comprado com sucesso!', 'Sucesso', { duration: 3000 })
      this.router.navigate([this.router.url + '/finished'])
    }).catch(err => {
      this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 3000 })
    })
  }

  addPurchase() {
    const total = this.form.get('price').value - this.form.get('discount').value;
    return this.apiComicService.createComicPurchase({
      id: this.comic.id,
      name: this.comic.title,
      price: this.form.get('price').value,
      discount: this.form.get('discount').value,
      total: total >= 0 ? total : 0,
      coupon: this.form.get('coupon').value,
      methodPayment: this.form.get('methodPayment').value,
      methodPaymentCard: this.form.get('methodPaymentCard').value,
      installmentPaymentCard: this.form.get('installmentPaymentCard').value,
      cardNumber: this.form.get('cardNumber').value,
    })
  }
}
