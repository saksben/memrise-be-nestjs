import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LessonService } from './lesson.service';
import { Lesson } from '@prisma/client';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  async findAll(): Promise<Lesson[]> {
    return await this.lessonService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Lesson> {
    return await this.lessonService.findOne(+id);
  }

  @Post()
  async create(@Body() createLessonDto: CreateLessonDto): Promise<Lesson> {
    return await this.lessonService.create(createLessonDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLessonDto: UpdateLessonDto,
  ): Promise<Lesson> {
    return await this.lessonService.update(+id, updateLessonDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.lessonService.delete(+id);
  }
}
