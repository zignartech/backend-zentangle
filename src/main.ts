import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import Moralis from 'moralis/node';
import { ZentangleService } from './wasp_zentangle';

async function main() {
  await Moralis.start({
    masterKey: process.env.MORALIS_MASTER_KEY,
    appId: process.env.MORALIS_APP_ID,
    serverUrl: process.env.MORALIS_SERVER_URL,
  });

  const { WaspClient, Base58 } = await import('@israel-lpz/wasmclient');

  const zentangleWS = new ZentangleService({
    configuration: {
      chainId: process.env.NEXT_PUBLIC_CHAIN_ID!,
      goShimmerApiUrl: process.env.NEXT_PUBLIC_GOSHIMMER_URL!,
      seed: Base58.decode(process.env.NEXT_PUBLIC_SEED!),
      waspApiUrl: process.env.NEXT_PUBLIC_WASP_API_URL!,
      waspWebSocketUrl: process.env.NEXT_PUBLIC_WASP_WS_URL!,
    },
    waspClient: new WaspClient(process.env.NEXT_PUBLIC_WASP_API_URL!, process.env.NEXT_PUBLIC_GOSHIMMER_URL!)
  });
  
  console.log(zentangleWS);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}
main();