import { Module } from '@nestjs/common';
import { JourneyHubBatchController } from './journey-hub-batch.controller';
import { JourneyHubBatchService } from './journey-hub-batch.service';

@Module({
  imports: [],
  controllers: [JourneyHubBatchController],
  providers: [JourneyHubBatchService],
})
export class JourneyHubBatchModule {}
