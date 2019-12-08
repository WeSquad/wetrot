import { Test, TestingModule } from '@nestjs/testing';
import { trotDto} from '../../test-files';
import { ITrot } from 'src/trot/model/trot.i';
import { TrotController } from '../../src/trot/controller/trot';

describe('TrotCpntroller', () => {
    let module: TestingModule;
    let controller: TrotController;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        providers: [],
        controllers: [TrotController],
      }).compile();
      controller = module.get<TrotController>(TrotController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create a trot', async () => {
      // Arrange
      const intputTrotDto = trotDto;

      // Act
      const ouput: ITrot = await controller.create(intputTrotDto);

      // Assert
      expect(ouput.id).toBeDefined();
  });
});
