import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Comic } from './../classes/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private storageService: StorageService) { }

  generateNumbersRandom(comics) {
    const quantityComicsRare = this.getQuantityComicsRare(comics);

    if (quantityComicsRare > 0) {
      const numbersRandom: number[] = this.getNumbersRandom(1, comics.length, quantityComicsRare);
      const comicRares = [];
      comics.map((comic, index) => {
        index++;
        if (numbersRandom && numbersRandom.includes(index)) {
          comicRares.push(comic.id)
        }
      })
      this.storageService.setStorage('comicsRares', comicRares)

    }
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
