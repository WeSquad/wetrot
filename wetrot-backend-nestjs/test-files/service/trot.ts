import { TrotDto } from '../../src/trot/model/trotDto';
import { ITrot } from 'src/trot/model/trot.i';
import * as uuid from 'uuid';
import { DeleteResult } from 'typeorm';

export const trotDto = new TrotDto();
trotDto.brand = 'brand';
trotDto.name = 'name';
trotDto.uuid = uuid.v4();
trotDto.batteryCapacity = 5500;
trotDto.currentBatteryLevel = 2000;
trotDto.usury = 0;
trotDto.wearLife = 990;

export const itrot: ITrot = {
    id: 1,
    uuid: uuid.v4(),
    brand: 'brand',
    name: 'name',
    batteryCapacity: 5500,
    localization: '48.8534;2.3488',
    currentBatteryLevel: 2000,
    usury: 0,
    wearLife: 990,
};

export const deleteTrot: DeleteResult = {
    raw: 1,
    affected: 1,
};
