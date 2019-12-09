import { Test, TestingModule } from '@nestjs/testing';
import { TrotService } from '../../src/trot/service/trot';
import { trotDto, itrot} from '../../test-files';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Trot } from '../../src/trot/entity/trot.entity';
import { Repository, DeleteResult } from 'typeorm';
import { ITrot } from 'src/trot/model/trot.i';

describe('TrotService', () => {
  let module: TestingModule;
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
    }).compile();
    service = module.get<TrotService>(TrotService);
    repository = module.get<Repository<Trot>>(getRepositoryToken(Trot));
  });

  it('should be defined', () => {
      expect(service).toBeDefined();
  });

  it('should create a trot', async () => {
    // Arrange
    const intputTrotDto = trotDto;
    const createSpy = jest.spyOn(repository, 'save').mockResolvedValue(itrot);

    // Act
    const ouput: ITrot = await service.create(intputTrotDto);

    // Assert
    expect(ouput.id).toBeDefined();
    expect(createSpy).toHaveBeenCalled();
  });

  it('should delete a trot', async () => {
    // Arrange
    const intputTrotName = 'X-01';

    // Act
    const ouput: DeleteResult = await service.delete(intputTrotName);

    // Assert
    expect(ouput.raw).toBeDefined();
  });
});
