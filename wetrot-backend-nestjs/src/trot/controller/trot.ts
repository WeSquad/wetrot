import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { TrotDto } from '../model/trotDto';
import { ITrot } from '../model/trot.i';
import { TrotService } from '../service/trot';

@Controller('/api/v1/trots')
export class TrotController {

    constructor(private service: TrotService) {}

    @Post()
    @HttpCode(201)
    create(@Body() trotDto: TrotDto) {
        return this.service.create(trotDto);
    }
}
