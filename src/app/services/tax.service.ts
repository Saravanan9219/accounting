import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tax } from '../models/tax.model';
import { BaseService } from './base.service';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class TaxService extends BaseService{

  constructor(localStorage: LocalStorageService) {
    super(localStorage);
    this.model = Tax;
    this.storageKey = 'tax';
  }


  getTaxes(): Observable<Tax[]> {
    return this.getItems();
  }

  getNewTax() {
    return this.getNewItem();
  }

  async saveContact(tax: Tax) {
    await this.saveItem(tax);
  }
}
