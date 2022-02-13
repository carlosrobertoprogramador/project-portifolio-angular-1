import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(name, data) {
    localStorage.setItem(name, data);
  }

  getStorage(name) {
    return localStorage.getItem(name);
  }

  removeItem(name) {
    localStorage.removeItem('name');
  }

  getClear() {
    localStorage.clear();
  }
}
