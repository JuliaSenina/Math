import Character from "./character";

export default class Stoned extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
  };

  get stoned() {
    return Boolean(this._stoned);
  };

  set stoned(valueStoned) {
    this._stoned = valueStoned;
  };

  get attack() {
    if (this.distance < 0 || this.distance > 5) {
      return 0;
    };
    let attack = this._attack - (this._attack / 10) * (this.distance - 1);
    if (this.stoned === true) {
      attack -= Math.log2(this.distance) * 5;
    };
    return Math.floor(attack);
  };
  
  set attack(valueAttack) {
    this._attack = valueAttack;
  };
}