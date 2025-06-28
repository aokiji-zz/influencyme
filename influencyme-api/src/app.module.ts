import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [PrismaModule, CampaignModule],
})
export class AppModule { }
