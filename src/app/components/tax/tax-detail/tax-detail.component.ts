import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tax } from '../../../models/tax.model';
import { TaxService } from '../../../services/tax.service';


@Component({
  selector: 'app-tax-detail',
  templateUrl: './tax-detail.component.html',
  styleUrls: ['./tax-detail.component.css']
})
export class TaxDetailComponent implements OnInit {

  @Input() tax: Tax;
  @Output() reloadTaxes: EventEmitter<any> = new EventEmitter();

  taxService: TaxService;

  constructor(taxService: TaxService) {
    this.taxService = taxService;
  }

  ngOnInit() {
  }

  async saveTax() {
    await this.taxService.saveItem(this.tax);
    this.reloadTaxes.emit();
  }

}
