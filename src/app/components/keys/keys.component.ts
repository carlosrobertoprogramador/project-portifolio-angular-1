import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from 'src/app/services/api-key.service';
import { Key } from './../../classes/key';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'type', 'value', 'actions'];
  keys: Key[];

  constructor(
    private apiKeyService: ApiKeyService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.apiKeyService.getKeys()
      .then(keys => {
        this.keys = keys;
      })
      .catch(error => {
        if (error.message) {
          this.snackBar.open(error.message, 'Erro', { duration: 8000 })
        } else {
          this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
        }
      })

    this.apiKeyService.setKeysCookie();
  }
}
