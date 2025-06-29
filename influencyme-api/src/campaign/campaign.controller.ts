import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseFilters,
  Delete,
  Put,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-user.dto';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';

@Controller('campaigns')
@UseFilters(PrismaClientExceptionFilter)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) { }

  @Post()
  create(@Body() dto: CreateCampaignDto) {
    return this.campaignService.create(dto);
  }

  @Get()
  @ApiQuery({name:"take", type:String})
  @ApiQuery({name:"skip", type:String})
  findAll(take:string, skip:string) {
    return this.campaignService.findAll(parseInt(take), parseInt(skip));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateCampaignDto>) {
    return this.campaignService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignService.remove(id);
  }
}
