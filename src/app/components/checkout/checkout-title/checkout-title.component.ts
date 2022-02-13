import { Component, OnInit, Input } from '@angular/core';
import { Comic } from './../../../classes/comic';

@Component({
  selector: 'app-checkout-title',
  templateUrl: './checkout-title.component.html',
  styleUrls: ['./checkout-title.component.scss']
})
export class CheckoutTitleComponent implements OnInit {
  @Input() comic: Comic;
  @Input() rare: Comic;

  constructor() { }

  ngOnInit(): void {
  }

}
