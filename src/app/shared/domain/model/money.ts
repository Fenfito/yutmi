export class Money {
  private readonly _amount: number;
  private readonly _currency: string;

  constructor(amount: number, currency: string = 'PEN') {
    this._amount = amount;
    this._currency = currency.toUpperCase();
  }

  /**
   *
   *
   * toString(): string {
   *     return `${this.currency} ${this.amount.toFixed(2)}`;
   *   }
   *
   *   add(other: Money): Money {
   *     if (this.currency !== other.currency) {
   *       throw new Error("No se pueden sumar monedas distintas directamente.");
   *     }
   *     return new Money(this.amount + other.amount, this.currency);
   *   }
   */

}
