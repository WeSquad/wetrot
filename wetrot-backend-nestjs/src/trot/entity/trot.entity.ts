import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    currentBatteryLevel: number;

    @Column()
    batteryCapacity: number;

    @Column()
    localization: string;

    @Column()
    brand: string;

    @Column()
    usury: number;

    @Column()
    wearLife: number;
}
