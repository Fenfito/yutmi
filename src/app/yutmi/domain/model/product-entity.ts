import { BaseEntity} from '../../../shared/domain/model/base-entity';
import { Money} from '../../../shared/domain/model/money';

export class ProductEntity implements BaseEntity {
  /**
   * quantity -> number of garments
   */
  constructor(props:{id: number, name: string, category: string, price: Money, quantity: number}) {
    this._id = props.id;
    this._name = props.name;
    this._category = props.category;
    this._price = props.price;
    this._quantity = props.quantity;
  }
  private _id : number;
  private _name : string;
  private _category : string;
  private _price : Money;
  private _quantity : number;


  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get category(): string {
    return this._category;
  }

  get price(): Money {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }


  set id(value: number) {
    this._id = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set category(value: string) {
    this._category = value;
  }

  set price(value: Money) {
    this._price = value;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
}
