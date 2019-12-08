import { Test, TestingModule } from '@nestjs/testing';
import { TrotService } from '../../src/trot/service/trot';
import { trotDto} from '../../test-files';
describe('TrotService', () => {
    let module: TestingModule;
    let service: TrotService;
    beforeAll(async () => {
      module = await Test.createTestingModule({
        providers: [TrotService],
      }).compile();
      service = module.get<TrotService>(TrotService);
    });
    
    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a trot', () => {
      // Arrange
      const intputTrotDto = trotDto;

      // Act
      const ouput: any = service.create(intputTrotDto);

      // Assert
      expect(ouput.id).toBeDefined();
  });
});
