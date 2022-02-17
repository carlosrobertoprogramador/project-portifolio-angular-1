import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../services/storage.service';
import { ApiMarvelService } from './../../services/api-marvel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Comic } from './../../classes/comic';
import { ApiComicService } from './../../services/api-comic.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public comicsRare: Comic[] = [];
  public comicsCommon: Comic[] = [];
  public sliderImages: string[] = [];

  constructor(
    private storageService: StorageService,
    private apiComicService: ApiComicService,
    private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['id', 'name', 'actions'];
  comics: Comic[];

  ngOnInit(): void {
    this.apiComicService.getComicsFavorite().then(comics => {
      this.comics = comics;
    })
  }

  remove(id) {

    this.apiComicService.removeComicFavorite(id).then(result => {
      this.comics = this.comics.filter((comic) => {
        return comic.id != id
      })
    }).catch(err => {
      this.snackBar.open('Erro interno, contate o suporte por favor!')
    })

  }
}
