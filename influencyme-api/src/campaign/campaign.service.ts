import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCampaignDto } from './dto/create-user.dto';
@Injectable()
export class CampaignService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateCampaignDto) {
    const extraHours = data.type === 'INFLUENCE' ? data.workedHours * 0.2 : 0;

    return this.prisma.campaign.create({
      data: {
        ...data,
        workedHours: data.workedHours + extraHours,
      },
    });
  }

  findAll(take = 10, skip = 0) {
    return this.prisma.campaign.findMany({
      take,
      skip,
    });
  }

  findOne(id: string) {
    return this.prisma.campaign.findUnique({ where: { id } });
  }

  update(id: string, data: Partial<CreateCampaignDto>) {
    return this.prisma.campaign.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.campaign.delete({ where: { id } });
  }
}
