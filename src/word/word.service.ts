import { Injectable, NotFoundException } from '@nestjs/common';
import { Word } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';

@Injectable()
export class WordService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Word[]> {
    return await this.prisma.word.findMany();
  }

  async findOne(id: number): Promise<Word> {
    const word = await this.prisma.word.findUnique({
      where: { id },
    });
    if (!word) {
      throw new NotFoundException(`Word with id ${id} not found`);
    }
    return word;
  }

  async create(data: CreateWordDto): Promise<Word> {
    return await this.prisma.word.create({
      data,
    });
  }

  async update(id: number, data: UpdateWordDto): Promise<Word> {
    const word = await this.findOne(id); // Check if exists
    return await this.prisma.word.update({
      where: { id: word.id },
      data,
    });
  }

  async delete(id: number) {
    await this.findOne(id); // Check if exists
    await this.prisma.word.delete({
      where: { id },
    });
  }
}
