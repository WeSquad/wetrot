import { Injectable } from '@nestjs/common';
import { TrotDto } from '../model/trotDto';
import { ITrot } from '../model/trot.i';

@Injectable()
export class TrotService {
     async create(trotDto: TrotDto): Promise<ITrot> {
      return null;
     }
}
