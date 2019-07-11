export interface IFighter {
  readonly id: number;
  readonly name: string;
  health: number;
  attack: number;
  defense: number;

  getHitPower: () => number;
  getBlockPower: () => number;
}
