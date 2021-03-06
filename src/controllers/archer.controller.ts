import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { Request } from "express";

import { ArcherService } from "src/services/archer.service";
import { SendTagsDTO } from "src/DTOs/send-tags.dto";

@Controller('archer')
export class ArcherController {
  constructor(private archerService: ArcherService) {}

  @Get('playMission?')
  async playMission(@Query('userId') userId: string, @Query('missionId') missionId: string): Promise<any> {
    const missionProgress = await this.archerService.findOrRequestPlay(userId, missionId);
    console.log('Mission progress');
    console.log(missionProgress);
  }

  @Post('sendTags')
  async sendTags(@Body() sendTagsDTO: SendTagsDTO) {
    const sendTags = await this.archerService.sendTags(sendTagsDTO);
  }
}