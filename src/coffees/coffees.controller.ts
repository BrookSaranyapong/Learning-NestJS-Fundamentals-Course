import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) { }

    @Get() // @Get('flavors') /coffees/flavors
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll(); // return `This action returns all coffees Limit: ${limit} , offset: ${offset}`;
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coffeesService.findOne(id); // return `This action return #${id} coffee`;
    }
    @Post() // @HttpCode(HttpStatus.GONE) optional!
    create(@Body() body) {
        return this.coffeesService.create(body); // return body;
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.coffeesService.update(id, body) // return `This action updates #${id} coffee`; 
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id) // return `This action removes #${id} coffee`;
    }
}
