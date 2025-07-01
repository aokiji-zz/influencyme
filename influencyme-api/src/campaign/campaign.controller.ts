import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseFilters,
  Delete,
  Put,
  Patch,
  Query,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';
import { ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('campaigns')
@UseFilters(PrismaClientExceptionFilter)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) { }

  @Post()
  create(@Body() dto: CreateCampaignDto) {
    return this.campaignService.create(dto);
  }

  @Get()
  @ApiQuery({ name: 'take', required: false, type: String })
  @ApiQuery({ name: 'skip', required: false, type: String })
  findAll(@Query('take') take?: string, @Query('skip') skip?: string) {
    return this.campaignService.findAll(take, skip);
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true, type: String })
  findOne(@Param('id') id: string) {
    return this.campaignService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', required: true, type: String })
  update(@Param('id') id: string, @Body() dto: Partial<CreateCampaignDto>) {
    return this.campaignService.update(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: String })
  remove(@Param('id') id: string) {
    return this.campaignService.remove(id);
  }
}
