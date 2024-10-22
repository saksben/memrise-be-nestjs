import { Injectable, NotFoundException } from '@nestjs/common';
import { Enrollment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Enrollment[]> {
    return this.prisma.enrollment.findMany();
  }

  async findOne(userId: number, courseId: number): Promise<Enrollment> {
    const enrollment = await this.prisma.enrollment.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });
    if (!enrollment) {
      throw new NotFoundException(
        `Enrollment with userId ${userId} and courseId ${courseId} not found`,
      );
    }
    return enrollment;
  }

  async create(data: CreateEnrollmentDto): Promise<Enrollment> {
    return await this.prisma.enrollment.create({
      data,
    });
  }

  async delete(userId: number, courseId: number) {
    return this.prisma.enrollment.delete({
      where: {
        userId_courseId: { userId, courseId },
      },
    });
  }
}
