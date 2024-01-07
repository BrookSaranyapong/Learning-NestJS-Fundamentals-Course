import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table === "coffee"
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // title: string;

    @Column()
    name: string;

    @Column({nullable:true})
    description:string;

    @Column()
    brand: string;

    @Column({ default: 0 })
    recommendations: number;

    @JoinTable()
    @ManyToMany(type => Flavor, (flovor) => flovor.coffees, {
        cascade: true, //['insert']
    })
    flavors: Flavor[];
}