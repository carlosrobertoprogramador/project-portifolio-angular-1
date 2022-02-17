import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../../services/storage.service';
import { ApiMarvelService } from './../../../services/api-marvel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Comic } from './../../../classes/comic';

@Component({
  selector: 'app-checkout-finished',
  templateUrl: './checkout-finished.component.html',
  styleUrls: ['./checkout-finished.component.scss']
})
export class CheckoutFinishedComponent implements OnInit {
  public id = null;
  public comic: Comic;

  constructor(
    private apiMarvelService: ApiMarvelService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.apiMarvelService.getComic(this.id)
      .then((comic => {
      this.comic = comic;
    })).catch((error => {
      if (error.message) {
        this.snackBar.open(error.message, 'Erro', { duration: 8000 })
      } else {
        this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
      }
    }));
  }

}
