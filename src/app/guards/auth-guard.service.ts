import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CookieService } from '../services/cookie.service';
import { ApiKeyService } from './../services/api-key.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private isAuthenticated: boolean = false;

  constructor(
    private cookieService: CookieService,
    private apiKeyService: ApiKeyService
  ) {
  }

  canActivate() {
    var publicKey: any = this.cookieService.getCookie('publicKey')
    var privateKey: any = this.cookieService.getCookie('privateKey')

    if (!publicKey || !privateKey) {
      this.isAuthenticated = false;
      if (this.apiKeyService.setKeysCookie()) {
        this.isAuthenticated = true;
      }
    } else {
      this.isAuthenticated = true;
    }

    return this.isAuthenticated;
  }
}
