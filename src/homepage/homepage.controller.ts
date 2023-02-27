import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import EditHeroDto from './dto/editHero.dto';
import { HomepageService } from './homepage.service';

@Controller('homepage')
@ApiTags('homepage')
export class HomepageController {
    constructor(private homepageService: HomepageService) { }

    @Get('hero')
    async getHero() {
        return this.homepageService.listHero()
    }

    @Get('hero/:id')
    async getHeroById(@Param('id') id: number) {
        return this.homepageService.getHerobyId(id)
    }

    @Patch('hero/:id')
    async patchHero(@Param('id') id: number, @Body()editHeroDto:EditHeroDto) {
        return this.homepageService.editHero(id, editHeroDto)
    }

    @Get('chinhhang')
    async getThuonghieuchinhhang() {
        return this.homepageService.listThuonghieuchinhhang()
    }

    @Get('chinhhang/:id')
    async getChinhhangById(@Param('id') id: number) {
        return this.homepageService.getChinhhangbyId(id)
    }b

    @Patch('chinhhang/:id')
    async patchChinhHang(@Param('id') id: number, @Body()editHeroDto:EditHeroDto) {
        return this.homepageService.editChinhhang(id, editHeroDto)
    }

    @Get('saletet')
    async getSaletet() {
        return this.homepageService.listSaletet()
    }

    @Get('bosuutap')
    async getBosuutap() {
        return this.homepageService.listBosuutap()
    }

    @Get('bosuutap/:id')
    async getBosuutapById(@Param('id') id:number) {
        return this.homepageService.getBosuutapbyId(id)
    }

    @Patch('bosuutap/:id')
    async patchBosuutap(@Param('id') id: number, @Body()editHeroDto:EditHeroDto) {
        return this.homepageService.editBosuutap(id, editHeroDto)
    }

    @Get('provinces')
    async getProvinces() {
        return this.homepageService.listProvinces()
    }

    @Get('provinces/:name')
    async getProvincesName(@Param('name') name: string) {
        return this.homepageService.listProvincesName(name)
    }
}
