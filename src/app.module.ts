import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArcherController } from './controllers/archer.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ArcherService } from './services/archer.service';
import { MissionController } from './controllers/mission.controller';
import { MissionService } from './services/mission.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    ArcherController,
    MissionController,
  ],
  providers: [
    AppService,
    ArcherService,
    MissionService,
  ],
})
export class AppModule {}
