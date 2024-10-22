import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async create(data: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data,
    });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id); // Check if exists
    return await this.prisma.user.update({
      where: { id: user.id },
      data,
    });
  }

  async delete(id: number) {
    await this.findOne(id); // Check if exists
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
