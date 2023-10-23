import Character from "../gameobjekt/Character";

export default class Player {
  private _name: string;
  private _email: string;
  private _password: string;
  private _passwordRepeat: string;
  private _isVerified: boolean;
  private _age: number;
  private _characters: Character[];


  constructor(name: string, email: string, password: string, passwordRepeat: string, isVerified: boolean, age: number, characters: Character[]) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._passwordRepeat = passwordRepeat;
    this._isVerified = isVerified;
    this._age = age;
    this._characters = characters;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get passwordRepeat(): string {
    return this._passwordRepeat;
  }

  set passwordRepeat(value: string) {
    this._passwordRepeat = value;
  }

  get isVerified(): boolean {
    return this._isVerified;
  }

  set isVerified(value: boolean) {
    this._isVerified = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get characters(): Character[] {
    return this._characters;
  }

  set characters(value: Character[]) {
    this._characters = value;
  }
}
