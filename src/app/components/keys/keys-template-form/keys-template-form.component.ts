import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiKeyService } from 'src/app/services/api-key.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-keys-template-form',
  templateUrl: './keys-template-form.component.html',
  styleUrls: ['./keys-template-form.component.scss']
})
export class KeysTemplateFormComponent implements OnInit {
  @Output() submitChange = new EventEmitter<any>();
  @Input() id = null;

  public types = [
    { label: 'Publica', value: 'publicKey' },
    { label: 'Privada', value: 'privateKey' },
  ]

  public form: FormGroup;
  public isSubmted: boolean = false;

  constructor(
    private apiKeyService: ApiKeyService,
    private builder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
    if (this.id) {
      this.apiKeyService.getKey(this.id)
        .then(coupon => {
          this.fill(coupon)
        })
        .catch(error => {
          if (error.message) {
            this.snackBar.open(error.message, 'Erro', { duration: 8000 })
          } else {
            this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
          }
        })
    }
  }


  fill(data) {
    if (data) {
      this.form.get('name').setValue(data.name);
      this.form.get('value').setValue(data.value);
      this.form.get('type').setValue(data.type);
    }
  }

  createForm() {
    return this.builder.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.isSubmted = true;
    if (this.form.valid) {
      this.submitChange.emit(this.form.value);
    }
  }
}
