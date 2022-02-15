import { Comic } from '../classes/comic';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { Character } from '../classes/character';
import { Serie } from '../classes/series';
import { Creator } from '../classes/creator';
import { Storie } from '../classes/storie';
import { Coupon } from './../classes/coupon';

@Injectable({
  providedIn: 'root'
})
export class ApiDbJsonService {
  private urlLocal = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) { }

  createCoupon(data) {
    return this.httpClient.post(`${this.urlLocal}coupons`, data).toPromise().then(
      result => {
        console.log(result);
      }
    );
  }


  updateCoupon(id, data) {
    return this.httpClient.put(`${this.urlLocal}coupons/${id}`, data).toPromise().then(
      result => {
        console.log(result);
      }
    );
  }

  getCoupons(): Promise<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${this.urlLocal}coupons`).toPromise().then(
      result => {
        return result;
      }
    );
  }

  getCoupon(id): Promise<Coupon> {
    return this.httpClient.get<Coupon>(`${this.urlLocal}coupons/${id}`).toPromise().then(
      result => {
        return result;
      }
    );
  }
}
