import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArcherController } from './controllers/archer.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ArcherService } from './services/archer.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    ArcherController
  ],
  providers: [
    AppService,
    ArcherService,
  ],
})
export class AppModule {}
