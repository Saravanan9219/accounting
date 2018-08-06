import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

import { Contact } from '../models/contact.model';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root',
})
export class ContactsService extends BaseService {

  constructor(localStorage: LocalStorageService) {
    super(localStorage);
    this.model = Contact;
    this.storageKey = 'contacts';
  }

}

