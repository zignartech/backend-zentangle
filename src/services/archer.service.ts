import { Injectable } from "@nestjs/common";
import Moralis from "moralis/node";
import axios from "axios";
import { SendTagsDTO } from "src/DTOs/send-tags.dto";

const INITIAL_BET: number = 1;

@Injectable()
export class ArcherService {
  constructor() { }

  private createProgress(userId: string, missionId: string): Object {
    const Progress = Moralis.Object.extend('MissionProgress');
    const newProgress = new Progress();
    newProgress.save({
      mission: { __type: 'Pointer', className: 'Mission', objectId: missionId },
      user: { __type: 'Pointer', className: '_User', objectId: userId },
      imagesTagged: 0,
      currentImage: '',
      tagging: false, // Save if the user got an event of playRequeted or need to request a new one
      missionCompleted: false,
      bits: 0,
      drift: 0,
      mana: 0,
      xp: 0,
      ingot: 0,
      totalDrift: 0,
      totalMana: 0,
      totalXP: 0,
      totalIngot: 0,
      arrow: 0,
      quill: 0,
      imageBet: 0,
      totalBet: 0,
      currentTags: { current: [], prev: 0, },
    });
    return newProgress;
  }

  async findOrRequestPlay(userId: string, missionId: string) {
    const progress: Object = await new Moralis.Query(Moralis.Object.extend('MissionProgress'))
      .equalTo('user', { __type: 'Pointer', className: '_User', objectId: userId })
      .equalTo('mission', { __type: 'Pointer', className: 'Mission', objectId: missionId })
      .first();
    if (!progress) {
      console.log('Requesting play');
      await axios.post('https://execute.zignar.io/requestPlay', {
        objectIdUser: userId,
        iotaBet: `IOTA:${INITIAL_BET}`,
        chain: process.env.NEXT_PUBLIC_SC_NAME,
      });
      console.log('Creating new game progress');
      return this.createProgress(userId, missionId);
    }
    console.log('There is a progress already created');
    return progress;
  }

  async sendTags(tagsData: SendTagsDTO) {
    console.log(tagsData);
    await axios.post('https://execute.zignar.io/sendTags', { ...tagsData });
  }
}