import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'angular-web-storage';
import { InterfaceModelBase } from '../models/base.model';

export abstract class BaseService {
  nextItemId = 1;
  model: InterfaceModelBase;
  localStorage: LocalStorageService;
  storageKey: string;

  constructor(localStorage: LocalStorageService) {
    this.localStorage = localStorage;
  }

  getItems(): Observable<any[]> {
    const itemData = JSON.parse(
      this.localStorage.get(this.storageKey) || '[]'
    );
    const items = itemData.map((data) => this.model.newItem(data));
    const itemIds = items.map((item_) => {
      return item_.id;
    });
    if (itemIds.length > 0) {
      this.nextItemId = Math.max(...itemIds) + 1;
    }
    return of(items);

  }

  getNewItem() {
    const newItem = this.model.newEmptyItem(this.nextItemId);
    this.nextItemId++;
    return newItem;
  }

  async saveItem(item: any) {
    const items = await this.getItems().toPromise();
    const existingItem = items.filter((item_) => {
      return item_.id === item.id;
    })[0];

    let newItems: any[];

    // edit existing contact
    if (existingItem) {
        newItems = items.map((item_: any) => {
        if (item_.id === item.id) {
          return item;
        } else {
          return item_;
        }
      });
    } else {  // add new contact
        items.push(item);
        newItems = items;
    }
    this.localStorage.set(this.storageKey, JSON.stringify(newItems));
  }
}
