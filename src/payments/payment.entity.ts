import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment{
    @PrimaryGeneratedColumn('uuid')
    paymentId?: string;
    @Column()
    orderId: string;
    @Column()
    restaurantId: string;
    @Column()
    customerId: string;
    @Column()
    orderDTime: Date;
    @Column()
    paymentDTime: Date;
    @Column()
    totalCost: number;
    @Column()
    finalCost: number;
    @Column()
    discount?: number;
}