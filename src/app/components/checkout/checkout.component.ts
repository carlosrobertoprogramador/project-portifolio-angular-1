import { Component, OnInit } from '@angular/core';
import { Comic, ComicPrice } from './../../classes/comic';
import { ApiMarvelService } from '../../services/api-marvel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from './../../services/storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
    console.log(this.form.get('coupon').value);

    const comicsRares: any = this.storageService.getStorage('comicsRares');

    this.id = this.route.snapshot.params.id;

    this.apiMarvelService.getComic(this.id).then((comic => {
      if (comicsRares.includes(comic.id)) {
        this.rare = true;
      } else {
        this.rare = false;
      }
      console.log(comic);
      this.comic = comic;
    })).catch((error => {
      console.error(error);
      if (error.message) {
        this.snackBar.open(error.message)
      } else {
        this.snackBar.open('Erro interno, contate o suporte por favor!')
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
    });
  }

  getPrice(prices: ComicPrice[]): number {
    return prices.find((price => {
      return price.type == "printPrice";
    })).price
    return 0;
  }
}
