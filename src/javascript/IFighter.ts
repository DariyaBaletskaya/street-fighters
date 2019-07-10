export interface IFighter {
  id: number;
  name: string;
  health: number;
  attack: number;
  defense: number;

  getHitPower: () => number;
  getBlockPower: () => number;
}
