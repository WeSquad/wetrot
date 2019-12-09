import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { Trot } from '../entity/trot.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TrotDto } from '../model/trotDto';
import { ITrot } from '../model/trot.i';

@Injectable()
export class TrotService {
    constructor(
            @InjectRepository(Trot) private readonly trotRepository: Repository<Trot>) {
            }

     async create(trotDto: TrotDto): Promise<ITrot> {
        const trot = new Trot();
        trot.brand = trotDto.brand;
        trot.uuid =  trotDto.uuid;
        trot.name = trotDto.name;
        trot.batteryCapacity = trotDto.batteryCapacity;
        trot.currentBatteryLevel = trotDto.currentBatteryLevel;
        trot.localization = trotDto.localization;
        trot.usury = trotDto.usury;
        trot.wearLife = trotDto.wearLife;
        return await this.trotRepository.save(trot);
     }

     async delete(name: string): Promise<DeleteResult>  {
      return await this.trotRepository.delete({name});
      }
}
