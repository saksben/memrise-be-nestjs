import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Course[]> {
    return await this.prisma.course.findMany();
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.prisma.course.findUnique({
      where: { id },
    });
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course;
  }

  async create(data: CreateCourseDto): Promise<Course> {
    return await this.prisma.course.create({
      data,
    });
  }

  async update(id: number, data: UpdateCourseDto): Promise<Course> {
    const course = await this.findOne(id); // Check if exists
    return await this.prisma.course.update({
      where: { id: course.id },
      data,
    });
  }

  async delete(id: number) {
    await this.findOne(id); //Check if exists
    await this.prisma.course.delete({
      where: { id },
    });
  }
}
