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
    this._attack *= (1.1 - 0.1 * this.distance);
    this._attack = this.stoned ? this._attack - Math.log2(this.distance) * 5 : this._attack;
    if (this._attack < 0) {
      this._attack = 0;
    };
    return Math.round(this._attack);
  };
  
  set attack(valueAttack) {
    this._attack = valueAttack;
  };
}