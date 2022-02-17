import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Key } from './../classes/key';
import { CookieService } from './cookie.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
  private urlLocal = "http://localhost:3000/"

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  createKey(data) {
    return this.httpClient.post(`${this.urlLocal}keys`, data).toPromise()
  }


  updateKey(id, data) {
    return this.httpClient.put(`${this.urlLocal}keys/${id}`, data).toPromise()
  }

  getKeys(): Promise<Key[]> {
    return this.httpClient.get<Key[]>(`${this.urlLocal}keys`).toPromise().then(
      result => {
        return result;
      }
    );
  }

  getKey(id): Promise<Key> {
    return this.httpClient.get<Key>(`${this.urlLocal}keys/${id}`).toPromise().then(
      result => {
        return result;
      }
    );
  }

  getKeyByName(name): Promise<Key[]> {
    return this.httpClient.get<Key[]>(`${this.urlLocal}keys?name=${name}`).toPromise().then(
      result => {
        return result;
      }
    );
  }

  setKeysCookie() {
    var publicKey: any = this.cookieService.getCookie('publicKey')
    var privateKey: any = this.cookieService.getCookie('privateKey')

    if (!publicKey || !privateKey) {
      return this.getKeys().then(keys => {

        let privateKey: any = keys.find(key => {
          return key.type == 'privateKey'
        })
        if (privateKey?.value) {
          this.cookieService.setCookie('privateKey', privateKey.value, 1)
        }

        let publicKey: any = keys.find(key => {
          return key.type == 'publicKey'
        })

        if (publicKey?.value) {
          this.cookieService.setCookie('publicKey', publicKey.value, 1)
        }

        publicKey = this.cookieService.getCookie('publicKey')
        privateKey = this.cookieService.getCookie('privateKey')

        if (!publicKey || !privateKey) {
          this.snackBar.open('Não existe uma ou mais chaves cadastradas, que são pertinentes para o funcionamento do sistema!', 'Alerta', {
            duration: 8000
          })
          this.router.navigate(['/keys/list'])
        } else {
          return true;
        }
      })
    }
  }
}
