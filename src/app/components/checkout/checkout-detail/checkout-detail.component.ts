import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
})
export class CheckoutDetailComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() paymentChange = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  getTotal(): number {
    const discount = this.form.get('discount').value
    const price = this.form.get('price').value
    let total = price - discount;
    total = total >= 0 ? total : 0.00
    return total;
  }

  isPayment(): boolean {
    const methodPayment = this.form.get('methodPayment').value
    if (methodPayment == 'bol') {
      return false;
    } else if (methodPayment == 'card') {
      const methodPaymentCard = this.form.get('methodPaymentCard').value
      const installmentPaymentCard = this.form.get('installmentPaymentCard').value
      const cardNumber = this.form.get('cardNumber').value
      if (methodPaymentCard == 'debt' && cardNumber) {
        return false;
      } else if (methodPaymentCard == 'credit') {
        if (installmentPaymentCard && cardNumber) {
          return false;
        }
      }
    }
    return true;
  }

  onPayment(): void {
    this.paymentChange.emit(true)
  }

}
