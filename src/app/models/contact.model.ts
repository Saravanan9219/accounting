interface InterfaceContact {
  id?: number;
  name: string;
  address?: string;
}

export class Contact {
  id: number;
  name: string;
  address?: string;

  static newItem(contactData: InterfaceContact) {
    const contact: Contact  =  new Contact(contactData.id, contactData);
    return contact;
  }

  static newEmptyItem(id: number) {
    const contactData = {
      name: '',
      address: ''
    };
    return new Contact(id, contactData);
  }

  constructor(id: number, contact: InterfaceContact) {
    this.id = id;
    this.name = contact.name;
    this.address = contact.address;
  }
}

