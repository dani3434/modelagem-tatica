import adress from "./adress";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: adress;
  private _active: boolean = true;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get Address(): adress {
    return this._address;
  }
  get rewardPoints(): number {
    return this._rewardPoints;
  }
  set Address(address: adress) {
    this._address = address;
  }
  validate() {
    if (this._name === "") {
      throw new Error("Name cannot be empty");
    }
    if (!this._id) {
      throw new Error("ID cannot be empty");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  isActive(): boolean {
    return this._active;
  }
  activate() {
    if (this._address === undefined) {
      throw new Error("Address cannot be empty");
    }
    this._active = true;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }
  deactivate() {
    this._active = false;
  }
}
