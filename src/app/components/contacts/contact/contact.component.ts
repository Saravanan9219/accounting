import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ContactsService } from '../../../services/contact.service';
import { BaseComponent } from '../../base/base.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BaseComponent implements OnInit {

  columnsToDisplay: string[];

  @ViewChild(MatTable)
  contactsTable: MatTable<any>;

  constructor(contactsService: ContactsService) {
    super(contactsService);
    this.setItemsTable(this.contactsTable);
  }

  ngOnInit() {
    this.columnsToDisplay = ['id', 'name', 'address'];
    this.getItems();
  }

}
