import { Component, Input, OnInit } from '@angular/core';
import { Comic } from './../../../classes/comic';

@Component({
  selector: 'app-checkout-image',
  templateUrl: './checkout-image.component.html',
  styleUrls: ['./checkout-image.component.scss']
})
export class CheckoutImageComponent implements OnInit {
  @Input() comic: Comic;

  constructor() { }

  ngOnInit(): void {
  }

}
