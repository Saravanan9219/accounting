import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../../models/contact.model';
import { ContactsService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact: Contact;
  @Output() reloadContacts: EventEmitter<any> = new EventEmitter();

  contactsService: ContactsService;

  constructor(contactsService: ContactsService) {
    this.contactsService = contactsService;
  }

  ngOnInit() {
  }

  async saveContact() {
    await this.contactsService.saveItem(this.contact);
    this.reloadContacts.emit();
  }

}
