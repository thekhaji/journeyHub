import { NestFactory } from '@nestjs/core';
import { JourneyHubBatchModule } from './journey-hub-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(JourneyHubBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
