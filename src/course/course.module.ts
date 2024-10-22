import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CourseService, PrismaService],
  controllers: [CourseController],
})
export class CourseModule {}
