import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
})
export class CheckoutDetailComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  isPayment(): boolean {
    const methodPayment = this.form.get('methodPayment').value
    console.log(methodPayment);

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

}
