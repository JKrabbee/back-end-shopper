import { Product } from './Product';

export class Pack {
  constructor(
    private _id: number,
    private _pack_id: number,
    private _product_id: number,
    private _qty: number
  ) {}

  // Método para atualizar o preço de venda do pacote e seus componentes.
  updatePrices(newSalesPrice: number): string {
    const componentSalesPrice = newSalesPrice / this._qty;
    const totalPriceOfComponents = componentSalesPrice * this._qty;

    if (Math.abs(totalPriceOfComponents - newSalesPrice) > 0.01) {
      return 'O preço dos componentes não corresponde ao preço do pacote.';
    }

    return 'OK';
  }

  // Método para validar o novo preço do pacote com base nas regras.
  validateNewPrice(newPrice: number, components: Product): string {
    const newPriceProduct = newPrice / this._qty;

    if (newPriceProduct < components.cost_price) {
      return 'Preço de venda do pacote abaixo do custo dos componentes.';
    } else if (newPriceProduct > components.sales_price * 1.1) {
      return 'Reajuste maior que 10% do preço atual do pacote.';
    } else if (newPriceProduct < components.sales_price * 0.9) {
      return 'Reajuste menor que 10% do preço atual do pacote.';
    } else {
      return 'OK';
    }
  }

  // Método para verificar se o pacote inclui um determinado produto.
  includesProduct(productCode: number): boolean {
    return this._product_id === productCode;
  }

  get qty() {
    return this._qty;
  }

  get pack_id() {
    return this._pack_id;
  }

  get product_id() {
    return this._product_id;
  }
}
