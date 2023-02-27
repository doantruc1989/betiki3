import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { SearchUsersDto } from './dto/searchUsers.dto';
import { updateUserPwDto } from './dto/updateUserPw.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query('page') page: number) {
    return this.usersService.findAll(page);
  }

  @Get('/search')
  querySearch(@Query() searchUsersDto:SearchUsersDto) {
    return this.usersService.querySearchUsers(searchUsersDto)
  }

  @Get('/total') 
  getcountUser() {
    return this.usersService.getCountUser()
  }

  // @UseGuards(AccessTokenGuard)
  @Get(':id')
  findById(@Param('id') id: number) {
    return this.usersService.findById(id);
  }

  // @UseGuards(AccessTokenGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateuser(id, updateUserDto);
  }

  @Patch('profile/:id')
  updatePw(@Param('id') id: number, @Body() updateUserPwDto : updateUserPwDto) {
    return this.usersService.updatePW(id, updateUserPwDto);
  }

  // @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
