import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeeSchema } from './entities/coffee.entity.mongoose';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    MongooseModule.forFeature([{ name: Coffee.name, schema: CoffeeSchema }]),
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService],
})
export class CoffeesModule {}
