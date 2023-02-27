import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUsersDto } from './dto/searchUsers.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { updateUserPwDto } from './dto/updateUserPw.dto';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.create(createUserDto);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async findAll(page = 1) {
    return this.usersRepository.find({
      skip: 5 * (page - 1),
      take: 5,
    });
  }

  async getCountUser() {
    const countUser = this.usersRepository.count();
    return countUser;
  }

  async findById(id: number) {
    return this.usersRepository.findOneBy({id:id});
  }

  async findByEmail(email: string) {
    const user= await this.usersRepository.findOneBy({email : email})
    return user;
  }

  async updateuser(
    id: number,
    updateUserDto: UpdateUserDto,
  ) {
// const user = await this.usersRepository.findOneBy({id});
// user.email = updateUserDto.email ? updateUserDto.email : user.email;
// user.role = updateUserDto.role ? updateUserDto.role : user.role;
// user.image = updateUserDto.image ? updateUserDto.image :user.image;
// user.username = updateUserDto.username ? updateUserDto.username : user.username;

    return this.usersRepository.update(id, updateUserDto);
  }

  async updatePW (id:number, updateUserPwDto: updateUserPwDto) {
    const user = await this.usersRepository.findOneBy({id});
    const hashPw = await bcrypt.hash(updateUserPwDto.password, 10)
    user.password = hashPw;
    return this.usersRepository.update(id,user)
  }

  async remove(id: number) {
    return this.usersRepository.delete(id);
  }

  async querySearchUsers (searchUsersDto:SearchUsersDto) {
    const users = await this.usersRepository.createQueryBuilder("User");

    if(searchUsersDto.search === "adminasc") {
      return users
      .orderBy(`User.${searchUsersDto.sortBy}`, 'ASC')
      .getMany();
    }

    if(searchUsersDto.search === "admindesc") {
      return users
      .orderBy(`User.${searchUsersDto.sortBy}`, 'DESC')
      .getMany();
    }

    if(searchUsersDto.search === "searchall") {
      return users
      .where(`LOWER(email) LIKE '%${searchUsersDto.sortBy}%'`)
      .orWhere(`LOWER(username) LIKE '%${searchUsersDto.sortBy}%'`)
      .orWhere(`LOWER(role) LIKE '%${searchUsersDto.sortBy}%'`)
      .getMany()
    }

    return users.getMany()
  }
}
