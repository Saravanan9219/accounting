import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { TaxService } from '../../../services/tax.service';
import { BaseComponent } from '../../base/base.component';


@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent extends BaseComponent implements OnInit {
  columnsToDisplay: string[];
  @ViewChild(MatTable)
  taxesTable: MatTable<any>;

  constructor(taxService: TaxService) {
    super(taxService);
    this.setItemsTable(this.taxesTable);
  }

  ngOnInit() {
    this.columnsToDisplay = ['id', 'name', 'rate'];
    this.getItems();
  }

}
