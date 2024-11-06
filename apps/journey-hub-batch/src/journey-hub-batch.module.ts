import { Module } from '@nestjs/common';
import { JourneyHubBatchController } from './journey-hub-batch.controller';
import { JourneyHubBatchService } from './journey-hub-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [JourneyHubBatchController],
  providers: [JourneyHubBatchService],
})
export class JourneyHubBatchModule {}
