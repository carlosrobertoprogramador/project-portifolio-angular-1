import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiDbJsonService } from 'src/app/services/api-db-json.service';

@Component({
  selector: 'app-coupons-template-form',
  templateUrl: './coupons-template-form.component.html',
  styleUrls: ['./coupons-template-form.component.scss']
})
export class CouponsTemplateFormComponent implements OnInit {
  @Output() submitChange = new EventEmitter<any>();
  @Input() id = null;

  public types = [
    { label: 'Comum', value: 'common' },
    { label: 'Raro', value: 'rare' },
  ]
  public form: FormGroup;
  public isSubmted: boolean = false;

  constructor(
    private apiDbJsonService: ApiDbJsonService,
    private builder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
    if (this.id) {
      this.apiDbJsonService.getCoupon(this.id).then(coupon => {
        this.fill(coupon)
      })
    }
  }


  fill(data) {
    if (data) {
      this.form.get('name').setValue(data.name);
      this.form.get('type').setValue(data.type);
    }
  }

  createForm() {
    return this.builder.group({
      name: ['', Validators.required],
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
