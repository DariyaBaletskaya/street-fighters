import { IFighter } from "./IFighter";

class Fighter implements IFighter {
  id: number;
  name: string;
  health: number;
  attack: number;
  defense: number;

  constructor(
    id: number,
    name: string,
    health: number,
    attack: number,
    defense: number
  ) {
    this.id = id;
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  getHitPower(): number {
    const criticalHitChance = this._generateFighterPower(1, 2);
    const power = this.attack * criticalHitChance;

    return power;
  }

  getBlockPower(): number {
    const dodgeChance = this._generateFighterPower(1, 2);
    const power = this.defense * dodgeChance;

    return power;
  }

  private _generateFighterPower(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }
}

export default Fighter;
