import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { Enrollment } from '@prisma/client';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  async findAll(): Promise<Enrollment[]> {
    return await this.enrollmentService.findAll();
  }

  @Get(':userId/:courseId')
  async findOne(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string,
  ): Promise<Enrollment> {
    return await this.enrollmentService.findOne(+userId, +courseId);
  }

  @Post()
  async create(
    @Body() createEnrollmentDto: CreateEnrollmentDto,
  ): Promise<Enrollment> {
    return await this.enrollmentService.create(createEnrollmentDto);
  }

  @Delete(':userId/:courseId')
  async delete(
    @Param('userId') userId: string,
    @Param('courseId') courseId: string,
  ): Promise<Enrollment> {
    return await this.enrollmentService.delete(+userId, +courseId);
  }
}
