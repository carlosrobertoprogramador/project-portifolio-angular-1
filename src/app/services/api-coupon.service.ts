import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coupon } from '../classes/coupon';

@Injectable({
  providedIn: 'root'
})
export class ApiCouponService {
  private urlLocal = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) { }

  createCoupon(data) {
    return this.httpClient.post(`${this.urlLocal}coupons`, data).toPromise().then(
      result => {
        console.log(result);
      });
  }


  updateCoupon(id, data) {
    return this.httpClient.put(`${this.urlLocal}coupons/${id}`, data).toPromise().then(
      result => {
        console.log(result);
      });
  }

  getCoupons(): Promise<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${this.urlLocal}coupons`).toPromise().then(
      result => {
        return result;
      });
  }

  getCoupon(id): Promise<Coupon> {
    return this.httpClient.get<Coupon>(`${this.urlLocal}coupons/${id}`).toPromise().then(
      result => {
        return result;
      });
  }

  getCouponByName(name): Promise<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${this.urlLocal}coupons?name=${name}`).toPromise().then(
      result => {
        return result;
      });
  }

  removeCoupon(id): Promise<Coupon> {
    return this.httpClient.delete<Coupon>(`${this.urlLocal}coupons/${id}`).toPromise()
  }
}
