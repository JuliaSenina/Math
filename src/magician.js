import Stoned from "./stoned";

export default class Magician extends Stoned {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  };
}