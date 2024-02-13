export default class adress {
  _street: string;
  _number: number;
  _zip: string;
  _city: string;

  constructor(street: string, number: number, zip: string, city: string) {
    this._street = street;
    this._number = number;
    this._zip = zip;
    this._city = city;
    this.validate();
  }

  validate() {
    if (this._street === "") {
      throw new Error("Street cannot be empty");
    }
    if (this._number === 0) {
      throw new Error("Number cannot be empty");
    }
    if (this._zip === "") {
      throw new Error("Zip cannot be empty");
    }
    if (this._city === "") {
      throw new Error("City cannot be empty");
    }
  }

  toString() {
    return (
      this._street + ", " + this._number + ", " + this._zip + ", " + this._city
    );
  }
}
