import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-side-pane',
  templateUrl: './navigation-side-pane.component.html',
  styleUrls: ['./navigation-side-pane.component.css']
})
export class NavigationSidePaneComponent implements OnInit {

  @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectItem(item: String) {
    this.itemSelected.emit({selectedItem: item});
  }

}
