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
    }).catch(err => {
      this.snackBar.open('Ocorreu um erro na atualização da chave, entre em contato com o suporte po favor!')
    })
  }
}
