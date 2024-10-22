import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { Language } from '@prisma/client';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Get()
  async findAll(): Promise<Language[]> {
    return await this.languagesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Language> {
    return await this.languagesService.findOne(+id);
  }

  @Post()
  async create(
    @Body() createLanguageDto: CreateLanguageDto,
  ): Promise<Language> {
    return await this.languagesService.create(createLanguageDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ): Promise<Language> {
    return await this.languagesService.update(+id, updateLanguageDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.languagesService.delete(+id);
  }
}
