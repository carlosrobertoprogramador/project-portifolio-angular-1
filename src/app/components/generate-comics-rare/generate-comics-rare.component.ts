import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../services/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComicsService } from './../../services/comics.service';
import { ApiMarvelService } from './../../services/api-marvel.service';

@Component({
  selector: 'app-generate-comics-rare',
  templateUrl: './generate-comics-rare.component.html',
  styleUrls: ['./generate-comics-rare.component.scss']
})
export class GenerateComicsRareComponent implements OnInit {
  public spinner:boolean = false
  constructor(
    private storageService: StorageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private comicsService: ComicsService,
    private apiMarvelService: ApiMarvelService,
  ) { }

  ngOnInit(): void {
  }

  async generateComicsRare() {
    this.spinner = true;
    this.storageService.removeItem('comicsRares')

    const comics = await this.apiMarvelService.getComics()
    this.comicsService.generateComicsRareRandom(comics)

    this.spinner = false;
    this.snackBar.open('Cupons raros gerados com sucesso!', 'Sucesso', {
      duration: 3000
    })

    this.router.navigate(['/comics/list'])
  }

}
