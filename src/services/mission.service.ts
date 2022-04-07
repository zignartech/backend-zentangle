import { Injectable } from "@nestjs/common";
import axios from "axios";
import { EndMissionDTO } from "src/DTOs/end-mission.dto";
import { NewMissionDTO } from "src/DTOs/new-mission.dto";

@Injectable()
export class MissionService {
  constructor () { }

  async createMission (missionAttrs: NewMissionDTO) {
    const mission = await axios.post('https://execute.zignar.io/createGame', {
      ...missionAttrs,
    });
    return mission;
  }

  async endMission (missionAttrs: EndMissionDTO) {
    const response = await axios.post('https://execute.zignar.io/endGame', {
      ...missionAttrs,
    });
    return response;
  }
}