import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Comic } from './../../classes/comic';
import { ApiComicService } from './../../services/api-comic.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  public comicsRare: Comic[] = [];
  public comicsCommon: Comic[] = [];
  public sliderImages: string[] = [];

  constructor(
    private apiComicService: ApiComicService,
    private snackBar: MatSnackBar
  ) { }

  displayedColumns: string[] = ['id', 'name', 'actions'];
  comics: Comic[];

  ngOnInit(): void {
    this.apiComicService.getComicsFavorite()
      .then(comics => {
        this.comics = comics;
      })
      .catch((error => {
        if (error.message) {
          this.snackBar.open(error.message, 'Erro', { duration: 8000 })
        } else {
          this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
        }
      }));
  }

}
