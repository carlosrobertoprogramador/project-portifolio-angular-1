import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comic } from './../../../../classes/comic';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.scss']
})
export class ShowCardsComponent implements OnInit {
  @Input() comics: Comic[] = [];
  @Input() rare: boolean = false;
  @Input() name: string = '';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  getCreatorsName(creators) {
    return creators.map(creator => {
      return creator.name
    }).join(', ')
  }

  navigateDetail(id) {
    this.route.navigate([`/comic/${id}/detail`])
  }

  navigateCheckout(id) {
    this.route.navigate([`/comic/${id}/checkout`])
  }

}
