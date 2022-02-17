import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from 'src/app/services/api-key.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-keys-update',
  templateUrl: './keys-update.component.html',
  styleUrls: ['./keys-update.component.scss']
})
export class KeysUpdateComponent implements OnInit {
  public id = null;
  constructor(
    private apiKeyService: ApiKeyService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  submitChange(data): void {
    this.apiKeyService.updateKey(this.id, data).then(result => {
      this.snackBar.open('Chave atualizada com sucesso!')
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
