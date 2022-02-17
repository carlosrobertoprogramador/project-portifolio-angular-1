import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Comic, ComicPrice } from '../../classes/comic';
import { StorageService } from '../../services/storage.service';
import { ApiMarvelService } from '../../services/api-marvel.service';
import { ApiComicService } from './../../services/api-comic.service';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public id = null;
  public comic: Comic;
  public rare: boolean = false;
  public isPurchase: boolean = false;
  public isFavorite: boolean = false;

  constructor(
    private storageService: StorageService,
    private apiMarvelService: ApiMarvelService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private apiComicService: ApiComicService,
  ) { }

  ngOnInit(): void {
    const comicsRares: any = this.storageService.getStorage('comicsRares');

    this.id = this.route.snapshot.params.id;

    this.apiMarvelService.getComic(this.id).then((comic => {
      if (comicsRares && comicsRares.includes(comic.id)) {
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
        this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 3000 })
      }
    }));

    this.apiComicService.getComicPurchase(this.id).then(comic => {
      this.isPurchase = true;
    }).catch(err => {
      this.isPurchase = false;
    })

    this.apiComicService.getComicFavorite(this.id).then(comic => {
      this.isFavorite = true;
    }).catch(err => {
      this.isFavorite = false;
    })
  }

  addFavorite() {
    this.apiComicService.createComicFavorite({ id: this.comic.id, name: this.comic.title }).then(
      result => {
        this.isFavorite = true;
        this.snackBar.open('Adicionado com sucesso aos favoritos!', 'Sucesso', { duration: 3000 })
      }
    ).catch(err => {
      this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 3000 })
    })
  }

  getPrice(prices: ComicPrice[]): number {
    return prices.find((price => {
      return price.type == "printPrice";
    })).price
  }

}
