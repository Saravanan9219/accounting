interface InterfaceTax {
  id: number;
  name: string;
  rate: number;
}

export class Tax {
  id: number;
  name: string;
  rate: number;

  constructor(tax: InterfaceTax) {
    this.id = tax.id;
    this.name = tax.name;
    this.rate = tax.rate;
  }

  static newItem(tax: InterfaceTax) {
    return new Tax(tax);
  }

  static newEmptyItem(id: number) {
    const taxData = {
      id: id,
      name: '',
      rate: 0,
    };
    return new Tax(taxData);
  }

}
