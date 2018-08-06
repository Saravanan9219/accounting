export abstract class BaseComponent {
  service: any;
  selectedItem?: any;
  isItemsLoading: boolean;
  items: any[];
  itemsTable: any;
  showEdit: boolean;

  constructor(service) {
    this.service = service;
    this.isItemsLoading = true;
    this.selectedItem = null;
    this.itemsTable = null;
    this.showEdit = false;
  }

  setItemsTable(itemsTable) {
    this.itemsTable = itemsTable;
  }

  selectRow(item) {
    this.selectedItem = item;
    this.showEdit = true;
  }

  newItem() {
    this.selectedItem = this.service.getNewItem();
  }

  reloadItems() {
    this.getItems();
    this.showEdit = false;
  }

  getItems() {
     this.service.getItems()
         .subscribe((contacts) => {
           this.items = contacts;
           this.isItemsLoading = false;
           if (this.itemsTable && this.itemsTable.dataSource) {
             this.itemsTable.renderRows();
           }
         });
   }
}
