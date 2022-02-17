import { Component, OnInit } from '@angular/core';
import { Comic } from './../../classes/comic';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiMarvelService } from '../../services/api-marvel.service';
import { StorageService } from './../../services/storage.service';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public comicsRare: Comic[] = [];
  public comicsCommon: Comic[] = [];
  public sliderImages: string[] = [];

  constructor(
    private storageService: StorageService,
    private apiMarvelService: ApiMarvelService,
    private comicsService: ComicsService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.apiMarvelService.getComics().then((async comics => {
      let comicsRares: any = this.storageService.getStorage('comicsRares');

      const qtdComics = comics.length;
      if (!comicsRares) {
        const qtdRare = qtdComics * 10 / 100
         comicsRares = this.comicsService.generateComicsRareRandom(comics, qtdRare)
      }

      comics.map((comic) => {
        if (comicsRares && comicsRares.includes(comic.id)) {
          const image = comic.images[0];
          this.comicsRare.push(comic);
          if (image) {
            const path = image.path + '.' + image.extension;
            this.sliderImages.push(path)
          }
        } else {
          this.comicsCommon.push(comic);
        }
      })


    })).catch((error => {
      console.error(error);
      if (error.message) {
        this.snackBar.open(error.message)
      } else {
        this.snackBar.open('Erro interno, contate o suporte por favor!')
      }
    }));
  }


}
