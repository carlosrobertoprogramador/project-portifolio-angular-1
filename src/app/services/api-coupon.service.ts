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
    return this.httpClient.post(`${this.urlLocal}coupons`, data).toPromise()
  }


  updateCoupon(id, data) {
    return this.httpClient.put(`${this.urlLocal}coupons/${id}`, data).toPromise()
  }

  getCoupons(): Promise<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${this.urlLocal}coupons`).toPromise()
  }

  getCoupon(id): Promise<Coupon> {
    return this.httpClient.get<Coupon>(`${this.urlLocal}coupons/${id}`).toPromise()
  }

  getCouponByName(name): Promise<Coupon[]> {
    return this.httpClient.get<Coupon[]>(`${this.urlLocal}coupons?name=${name}`).toPromise()
  }

  removeCoupon(id): Promise<Coupon> {
    return this.httpClient.delete<Coupon>(`${this.urlLocal}coupons/${id}`).toPromise()
  }
}
