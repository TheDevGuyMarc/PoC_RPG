import Character from "../gameobjekt/Character";

export default class Player {
  private name: string;
  private email: string;
  private password: string;
  private passwordRepeat: string;
  private isVerified: boolean;
  private age: number;
  private characters: Character[];
}
