import { Component, OnInit } from '@angular/core';
import { Comic, ComicPrice } from './../../classes/comic';
import { ApiService } from './../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public id = null;
  public comic: Comic;

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.apiService.getComic(this.id).then((comic => {
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

  getPrice(prices: ComicPrice[]): number {
    return prices.find((price => {
      return price.type == "printPrice";
    })).price
    return 0;
  }
}
