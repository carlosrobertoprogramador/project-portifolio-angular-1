import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-data',
  templateUrl: './checkout-data.component.html',
  styleUrls: ['./checkout-data.component.scss']
})
export class CheckoutDataComponent implements OnInit {
  @Input() form: FormGroup;

  public methodsPayments = [
    { label: 'Boleto', value: 'bol' },
    { label: 'Cartão', value: 'card' },
  ]
  public methodsPaymentsCard = [
    { label: 'Débito', value: 'debt' },
    { label: 'Crédito', value: 'credit' },
  ]
  public installmentsPaymentsCard = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
