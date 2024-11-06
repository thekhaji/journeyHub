import { Test, TestingModule } from '@nestjs/testing';
import { JourneyHubBatchController } from './journey-hub-batch.controller';
import { JourneyHubBatchService } from './journey-hub-batch.service';

describe('JourneyHubBatchController', () => {
  let journeyHubBatchController: JourneyHubBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JourneyHubBatchController],
      providers: [JourneyHubBatchService],
    }).compile();

    journeyHubBatchController = app.get<JourneyHubBatchController>(JourneyHubBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(journeyHubBatchController.getHello()).toBe('Hello World!');
    });
  });
});
