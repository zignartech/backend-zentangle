import Moralis from "moralis/node";

import { Mission } from './Mission';

export interface IMissionProgress {
  mission: Mission;
  user: Moralis.User;
  imagesTagged: number;
  currentImage: string;
  tagging: boolean;
  missionCompleted: boolean;
  bits: number;
  drift: number;
  mana: number;
  xp: number;
  ingot: number;
  arrow: number;
  quill: number;
  imageBet: number;
  totalBet: number;
  currentTags: Object;
}

class MissionProgress extends Moralis.Object<IMissionProgress> {
  constructor(attrs?: IMissionProgress) {
    super('MissionProgress', attrs!);
  }
}

Moralis.Object.registerSubclass('MissionProgress', MissionProgress);