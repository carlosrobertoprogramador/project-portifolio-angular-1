import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Comic, ComicPrice } from './../../../classes/comic';
import { StorageService } from './../../../services/storage.service';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public id = null;
  public comic: Comic;
  public rare: boolean = false;

  constructor(
    private storageService: StorageService,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const comicsRares: any = this.storageService.getStorage('comicsRares');

    this.id = this.route.snapshot.params.id;

    this.apiService.getComic(this.id).then((comic => {
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

  getPrice(prices: ComicPrice[]): number {
    return prices.find((price => {
      return price.type == "printPrice";
    })).price
    return 0;
  }

}
