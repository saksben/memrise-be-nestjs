import { Injectable, NotFoundException } from '@nestjs/common';
import { Lesson } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Lesson[]> {
    return await this.prisma.lesson.findMany({
      include: {
        words: true,
      },
    });
  }

  async findOne(id: number): Promise<Lesson> {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id },
      include: {
        words: true,
      },
    });
    if (!lesson) {
      throw new NotFoundException(`Lesson with id ${id} not found`);
    }
    return lesson;
  }

  async create(data: CreateLessonDto): Promise<Lesson> {
    return await this.prisma.lesson.create({
      data,
    });
  }

  async update(id: number, data: UpdateLessonDto): Promise<Lesson> {
    const lesson = await this.findOne(id); // Check if exists
    return await this.prisma.lesson.update({
      where: { id: lesson.id },
      data,
    });
  }

  async delete(id: number) {
    await this.findOne(id); // Check if exists
    await this.prisma.lesson.delete({
      where: { id },
    });
  }
}
