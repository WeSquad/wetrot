import { Controller } from '@nestjs/common';
import { TrotDto } from '../model/trotDto';
import { ITrot } from '../model/trot.i';

@Controller('/api/v1/trots')
export class TrotController {

    create(trotDto: TrotDto): Promise<ITrot> {
        return  null;
    }
}
