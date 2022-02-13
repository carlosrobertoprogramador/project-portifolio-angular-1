import { Component, OnInit} from '@angular/core';
import { Comic } from './../../../classes/comic';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../../services/api.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public comicsRare: Comic[] = [];
  public comicsCommon: Comic[] = [];
  public sliderImages: string[] = [];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.apiService.getComics().then((comics => {
      this.getQuantityComicsRare(comics)
      const quantityComicsRare = this.getQuantityComicsRare(comics);
      if (quantityComicsRare > 0) {
        const numbersRandom = this.getNumbersRandom(1, comics.length, quantityComicsRare);
        comics.map((comic, index) => {
          index++;
          if (numbersRandom.includes(index)) {
            this.comicsRare.push(comic);
            const image = comic.images[0];
            if (image) {
              const path = image.path + '.' + image.extension;
              this.sliderImages.push(path)
            }
          } else {
            this.comicsCommon.push(comic);
          }
        })
      }

    })).catch((error => {
      console.error(error);
      if (error.message) {
        this.snackBar.open(error.message)
      } else {
        this.snackBar.open('Erro interno, contate o suporte por favor!')
      }
    }));
  }

  getQuantityComicsRare(data: Comic[] = []): number {
    if (data.length > 0) {
      return this.getNumberRandom(1, data.length);
    }
    return 0
  }

  getNumbersRandom(min, max, quantity): number[] {
    const numbers = [];
    for (let index = 0; index < quantity; index++) {
      const number = this.getNumberRandom(min, max)
      if (numbers.includes(number)) {
        index--;
      } else {
        numbers.push(this.getNumberRandom(min, max));
      }
    }
    return numbers;
  }

  getNumberRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
