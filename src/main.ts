import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import Moralis from 'moralis/node';

async function main() {
  await Moralis.start({
    masterKey: process.env.MORALIS_MASTER_KEY,
    appId: process.env.MORALIS_APP_ID,
    serverUrl: process.env.MORALIS_SERVER_URL,
  });
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}
main();