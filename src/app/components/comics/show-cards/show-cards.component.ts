import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comic } from './../../../classes/comic';
import { ApiComicService } from './../../../services/api-comic.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.scss']
})
export class ShowCardsComponent implements OnInit {
  @Input() comics: Comic[] = [];
  @Input() rare: boolean = false;
  @Input() name: string = '';

  constructor(
    private router: Router,
    private apiComicService: ApiComicService,
  ) { }

  ngOnInit(): void {
  }

  getCreatorsName(creators) {
    return creators.map(creator => {
      return creator.name
    }).join(', ')
  }

  navigateDetail(id) {
    this.router.navigate([`/comics/${id}/detail`])
  }

  async navigateCheckout(id) {
    this.apiComicService.getComicPurchase(id).then(comicPurchase => {
      this.router.navigate(['/comics/purchase'])
    }).catch(err => {
      this.router.navigate([`/comics/${id}/checkout`])
    })
  }

}
