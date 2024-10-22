import { Injectable, NotFoundException } from '@nestjs/common';
import { Language } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';

@Injectable()
export class LanguagesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Language[]> {
    return await this.prisma.language.findMany();
  }

  async findOne(id: number): Promise<Language> {
    const language = await this.prisma.language.findUnique({
      where: { id },
    });
    if (!language) {
      throw new NotFoundException(`Language with ID ${id} not found`);
    }
    return language;
  }

  async create(data: CreateLanguageDto): Promise<Language> {
    return await this.prisma.language.create({
      data,
    });
  }

  async update(id: number, data: UpdateLanguageDto): Promise<Language> {
    const language = await this.findOne(id); // Check if exists
    return await this.prisma.language.update({
      where: { id: language.id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await this.findOne(id); // Check if exists
    await this.prisma.language.delete({
      where: { id },
    });
  }
}
