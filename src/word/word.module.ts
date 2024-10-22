import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [WordService, PrismaService],
  controllers: [WordController],
})
export class WordModule {}
