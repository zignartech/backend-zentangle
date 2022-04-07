import { Body, Controller, Post } from "@nestjs/common";
import { EndMissionDTO } from "src/DTOs/end-mission.dto";
import { NewMissionDTO } from "src/DTOs/new-mission.dto";
import { MissionService } from "src/services/mission.service";

@Controller('mission')
export class MissionController {
  constructor (private missionService: MissionService) { }

  @Post('create')
  async create (@Body() newMissionDTO: NewMissionDTO) {
    // Create new mission with service
    const newMission = await this.missionService.createMission(newMissionDTO);
  }

  @Post('end')
  async endMission (@Body() endMissionDTO: EndMissionDTO) {
    // End mission with service
    const endMission = await this.missionService.endMission(endMissionDTO);
  }
}