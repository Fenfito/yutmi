import  { BaseEntity} from '../../../shared/domain/model/base-entity';

export class Client implements BaseEntity {
  constructor(props:{id: number, name: string, lastName: string, age: number}) {
    this._id = props.id;
    this._name = props.name;
    this._lastName = props.lastName;
    this._age = props.age;

  }

  private _id: number;
  private _name: string;
  private _lastName: string;
  private _age: number;

  get name(): string { return this._name; }

  set name(value: string) { this._name = value; }

  get id(): number { return this._id; }

  set id(value: number) { this._id = value; }

  get lastName(): string { return this._lastName; }

  set lastName(value: string) { this._lastName = value; }

  get age(): number { return this._age; }

  set age(value: number) { this._age = value; }
}
