import { Controller, Get } from '@nestjs/common';
import { JourneyHubBatchService } from './journey-hub-batch.service';

@Controller()
export class JourneyHubBatchController {
  constructor(private readonly journeyHubBatchService: JourneyHubBatchService) {}

  @Get()
  getHello(): string {
    return this.journeyHubBatchService.getHello();
  }
}
