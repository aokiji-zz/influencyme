// src/articles/articles.module.ts

import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CampaignController } from './campaign.controller';

@Module({
  exports: [CampaignService],
  controllers: [CampaignController],
  providers: [CampaignService],
  imports: [PrismaModule],
})
export class CampaignModule { }
