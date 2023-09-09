export class Product {
  constructor(
    private _code: number,
    private _name: string,
    private _cost_price: number,
    private _sales_price: number
  ) {}

  validateNewPrice(newPrice: number): string {
    if (newPrice < this._cost_price) {
      return 'Preço de venda abaixo do custo.'; // Regra 1: Preço de venda abaixo do custo.
    } else if (newPrice > this._sales_price * 1.1) {
      return 'Reajuste maior que 10% do preço atual.'; // Regra 2: Reajuste maior que 10% do preço atual.
    } else if (newPrice < this._sales_price * 0.9) {
      return 'Reajuste menor que 10% do preço atual.'; // Regra 3: Reajuste menor que 10% do preço atual.
    } else {
      return 'OK'; // OK!
    }
  }

  updateSalesPrice(newSalesPrice: number): void {
    this._sales_price = newSalesPrice;
  }

  get code() {
    return this._code;
  }
  get name() {
    return this._name;
  }
  get cost_price() {
    return this._cost_price;
  }
  get sales_price() {
    return this._sales_price;
  }
}
