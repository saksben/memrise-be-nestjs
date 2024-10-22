import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WordService } from './word.service';
import { Word } from '@prisma/client';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  async findAll(): Promise<Word[]> {
    return await this.wordService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Word> {
    return await this.wordService.findOne(+id);
  }

  @Post()
  async create(@Body() createWordDto: CreateWordDto): Promise<Word> {
    return await this.wordService.create(createWordDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWordDto: UpdateWordDto,
  ): Promise<Word> {
    return await this.wordService.update(+id, updateWordDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.wordService.delete(+id);
  }
}
