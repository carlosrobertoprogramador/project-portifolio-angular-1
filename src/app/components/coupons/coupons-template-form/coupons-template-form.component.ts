import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiCouponService } from 'src/app/services/api-coupon.service';

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
    private apiCouponService: ApiCouponService,
    private builder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
    if (this.id) {
      this.apiCouponService.getCoupon(this.id)
        .then(coupon => {
          this.fill(coupon)
        })
        .catch(error => {
          if (error.message) {
            this.snackBar.open(error.message, 'Erro', { duration: 8000 })
          } else {
            this.snackBar.open('Erro interno, contate o suporte por favor!', 'Erro', { duration: 8000 })
          }        })
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
