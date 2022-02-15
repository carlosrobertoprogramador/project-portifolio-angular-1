import { Component, OnInit } from '@angular/core';
import { ApiDbJsonService } from 'src/app/services/api-db-json.service';
import { Coupon } from './../../classes/coupon';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'type','actions'];
  coupons: Coupon[];

  constructor(private apiDbJsonService: ApiDbJsonService) { }

  ngOnInit(): void {
    this.apiDbJsonService.getCoupons().then(coupons => {
      this.coupons = coupons;
    })
  }

}
