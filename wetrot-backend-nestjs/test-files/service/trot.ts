import { TrotDto } from '../../src/trot/model/trotDto';
import { ITrot } from 'src/trot/model/trot.i';

export const trotDto = new TrotDto();
trotDto.brand = 'brand';
trotDto.name = 'name';
trotDto.batteryCapacity = 5500;
trotDto.currentBatteryLevel = 2000;
trotDto.usury = 0;
trotDto.wearLife = 990;

export const itrot: ITrot = {
    id: 1,
    brand: 'brand',
    name: 'name',
    batteryCapacity: 5500,
    localization: '48.8534;2.3488',
    currentBatteryLevel: 2000,
    usury: 0,
    wearLife: 990,
};
