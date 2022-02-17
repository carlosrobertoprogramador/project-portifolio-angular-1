import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comic } from './../classes/comic';

@Injectable({
  providedIn: 'root'
})
export class ApiComicService {
  private urlLocal = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) { }

  createComicFavorite(data) {
    return this.httpClient.post(`${this.urlLocal}comics-favorite`, data).toPromise()
  }

  updateComicFavorite(id, data) {
    return this.httpClient.put(`${this.urlLocal}comics-favorite/${id}`, data).toPromise()
  }

  getComicsFavorite(): Promise<Comic[]> {
    return this.httpClient.get<Comic[]>(`${this.urlLocal}comics-favorite`).toPromise()
  }

  getComicFavorite(id): Promise<Comic> {
    return this.httpClient.get<Comic>(`${this.urlLocal}comics-favorite/${id}`).toPromise()
  }

  removeComicFavorite(id): Promise<Comic> {
    return this.httpClient.delete<Comic>(`${this.urlLocal}comics-favorite/${id}`).toPromise()
  }

  getComicFavoriteByName(name): Promise<Comic[]> {
    return this.httpClient.get<Comic[]>(`${this.urlLocal}comics-favorite?name=${name}`).toPromise()
  }

  createComicPurchase(data) {
    return this.httpClient.post(`${this.urlLocal}comics-purchase`, data).toPromise()

  }

  updateComicPurchase(id, data) {
    return this.httpClient.put(`${this.urlLocal}comics-purchase/${id}`, data).toPromise()
  }

  getComicsPurchase(): Promise<Comic[]> {
    return this.httpClient.get<Comic[]>(`${this.urlLocal}comics-purchase`).toPromise()
  }

  getComicPurchase(id): Promise<Comic> {
    return this.httpClient.get<Comic>(`${this.urlLocal}comics-purchase/${id}`).toPromise()
  }

  getComicPurchaseByName(name): Promise<Comic[]> {
    return this.httpClient.get<Comic[]>(`${this.urlLocal}comics-purchase?name=${name}`).toPromise()
  }
}
