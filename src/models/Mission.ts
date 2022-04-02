import Moralis from "moralis/node";

export interface IMission {
  campaign: number;
  description: string;
  images: number;
  pricePool: number;
  completed: boolean;
}

export class Mission extends Moralis.Object<IMission> {
  constructor(attrs?: IMission) {
    super('Mission', attrs!);
  }
}

Moralis.Object.registerSubclass('Mission', Mission);