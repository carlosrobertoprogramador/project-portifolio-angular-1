import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from 'src/app/services/api-key.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keys-create',
  templateUrl: './keys-create.component.html',
  styleUrls: ['./keys-create.component.scss']
})
export class KeysCreateComponent implements OnInit {
  constructor(
    private apiKeyService: ApiKeyService,
    private snackBar: MatSnackBar,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  submitChange(data): void {
    this.apiKeyService.createKey(data).then(result => {
      this.snackBar.open('Chave cadastrada com sucesso!')
      this.router.navigate(['/keys/list'])
    }).catch(error => {
      if (error.message) {
        this.snackBar.open(error.message, 'Erro', { duration: 8000 })
      } else {
        this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
      }
    })
  }

}
