import { Comic } from '../classes/comic';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { Character } from '../classes/character';
import { Serie } from '../classes/series';
import { Creator } from '../classes/creator';
import { Storie } from '../classes/storie';
import { CookieService } from 'src/app/services/cookie.service';

@Injectable({
  providedIn: 'root'
})

export class ApiMarvelService {
  private md5 = new Md5();
  private publicKey = this.cookieService.getCookie('publicKey')
  private privateKey = this.cookieService.getCookie('privateKey')
  private time = new Date().toDateString()
  private hash = this.md5.appendStr(this.time + this.privateKey + this.publicKey).end()
  private urlMarvel = "http://gateway.marvel.com/v1/public/"
  private paramsMarvel = `ts=${this.time}&apikey=${this.publicKey}&hash=${this.hash}`;

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
  ) { }

  getComics(): Promise<Comic[]> {
    return this.httpClient.get<Comic[]>(`${this.urlMarvel}comics?${this.paramsMarvel}`).toPromise()
      .then(
        result => {
          if (result['code'] == 200) {
            if (result['data']['count'] > 0) {
              return result['data']['results'].map(comics => {
                return comics
              })
            } else {
              return null;
            }
          } else {
            throw new Error('Ocorreu um erro interno de código!');
          }
        }
      )
  }

  getComic(id: number): Promise<Comic> {
    return this.httpClient.get<Comic>(`${this.urlMarvel}comics/${id}?${this.paramsMarvel}`).toPromise()
      .then(
        result => {
          if (result['code'] == 200) {
            if (result['data']['count'] == 1) {
              return result['data']['results'][0]
            } else {
              return null;
            }
          } else {
            throw new Error('Ocorreu um erro interno de código!');
          }
        }
      )
  }

  getCharacters(): Promise<Character[]> {
    return this.httpClient.get<Character[]>(`${this.urlMarvel}characters?${this.paramsMarvel}`).toPromise()
      .then(
        result => {
          if (result['code'] == 200) {
            if (result['data']['count'] > 0) {
              return result['data']['results'].map(characters => {
                return characters
              })
            } else {
              return null;
            }
          } else {
            throw new Error('Ocorreu um erro interno de código!');
          }
        }
      )
  };

  getSeries(): Promise<Serie[]> {
    return this.httpClient.get<Serie[]>(`${this.urlMarvel}series?${this.paramsMarvel}`).toPromise()
      .then(
        result => {
          if (result['code'] == 200) {
            if (result['data']['count'] > 0) {
              return result['data']['results'].map(series => {
                return series
              })
            } else {
              return null;
            }
          } else {
            throw new Error('Ocorreu um erro interno de código!');
          }
        }
      )
  };

  getCreators(): Promise<Creator[]> {
    return this.httpClient.get<Creator[]>(`${this.urlMarvel}creators?${this.paramsMarvel}`).toPromise()
      .then(
        result => {
          if (result['code'] == 200) {
            if (result['data']['count'] > 0) {
              return result['data']['results'].map(creators => {
                return creators
              })
            } else {
              return null;
            }
          } else {
            throw new Error('Ocorreu um erro interno de código!');
          }
        }
      )
  };

  getStories(): Promise<Storie[]> {
    return this.httpClient.get<Storie[]>(`${this.urlMarvel}stories?${this.paramsMarvel}`).toPromise()
      .then(
        result => {
          if (result['code'] == 200) {
            if (result['data']['count'] > 0) {
              return result['data']['results'].map(stories => {
                return stories
              })
            } else {
              return null;
            }
          } else {
            throw new Error('Ocorreu um erro interno de código!');
          }
        }
      )
  };

  getEvents(): Promise<Event[]> {
    return this.httpClient.get<Event[]>(`${this.urlMarvel}events?${this.paramsMarvel}`).toPromise()
      .then(
        result => {
          if (result['code'] == 200) {
            if (result['data']['count'] > 0) {
              return result['data']['results'].map(events => {
                return events
              })
            } else {
              return null;
            }
          } else {
            throw new Error('Ocorreu um erro interno de código!');
          }
        }
      )
  };

}
