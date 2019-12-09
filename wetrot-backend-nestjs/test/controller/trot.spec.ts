import { Test, TestingModule } from '@nestjs/testing';
import { trotDto, itrot} from '../../test-files';
import { ITrot } from 'src/trot/model/trot.i';
import { TrotController } from '../../src/trot/controller/trot';
import { TrotService } from '../../src/trot/service/trot';
import { Trot } from '../../src/trot/entity/trot.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TrotCpntroller', () => {
    let module: TestingModule;
    let controller: TrotController;
    let service: TrotService;
    let repository: Repository<Trot>;

    beforeAll(async () => {
      module = await Test.createTestingModule({
        providers: [TrotService,
            {
                provide: getRepositoryToken(Trot),
                useClass: Repository,
            },
        ],
        controllers: [TrotController],
      }).compile();
      controller = module.get<TrotController>(TrotController);
      service = module.get<TrotService>(TrotService);
      repository = module.get<Repository<Trot>>(getRepositoryToken(Trot));
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create a trot', async () => {
      // Arrange
      const intputTrotDto = trotDto;
      const createSpy = jest.spyOn(service, 'create').mockResolvedValue(itrot);

      // Act
      const ouput: ITrot = await controller.create(intputTrotDto);

      // Assert
      expect(ouput.id).toBeDefined();
      expect(createSpy).toHaveBeenCalled();
  });
});