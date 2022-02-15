import { Component, OnInit } from '@angular/core';
import { Comic } from './../../../classes/comic';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiMarvelService } from '../../../services/api-marvel.service';
import { StorageService } from './../../../services/storage.service';
import { ComicsService } from './../../../services/comics.service';

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
    private comicsService: ComicsService,
    private storageService: StorageService,
    private apiService: ApiMarvelService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.apiService.getComics().then((comics => {
      const comicsRares: any = this.storageService.getStorage('comicsRares');

      if (!comicsRares) {
        this.comicsService.generateNumbersRandom(comics)
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
