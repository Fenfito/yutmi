export class Money {
  private readonly _amount: number;
  private readonly _currency: string;

  constructor(amount: number, currency: string = 'PEN') {
    this._amount = amount;
    this._currency = currency.toUpperCase();
  }
}
