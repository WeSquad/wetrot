import { Controller, Post, HttpCode, Body, Delete, Param } from '@nestjs/common';
import { TrotDto } from '../model/trotDto';
import { TrotService } from '../service/trot';

@Controller('/api/v1/trots')
export class TrotController {

    constructor(private service: TrotService) {}

    @Post()
    @HttpCode(201)
    create(@Body() trotDto: TrotDto) {
        return this.service.create(trotDto);
    }

    @Delete(':name')
    @HttpCode(201)
    delete(@Param('name') name: string) {
        return null;
    }
}
