import { Injectable } from '@nestjs/common';

@Injectable()
export class JourneyHubBatchService {
  getHello(): string {
    return 'Hello World!';
  }
}
