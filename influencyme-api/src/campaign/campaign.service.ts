import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
@Injectable()
export class CampaignService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateCampaignDto) {
    const extraHours = data.type === 'INFLUENCE' ? data.workedHours * 0.2 : 0;

    return this.prisma.campaign.create({
      data: {
        startDate: new Date(data.startDate),
        description: data.description,
        cost: data.cost,
        endDate: new Date(data.endDate),
        name: data.name,
        type: data.type,
        isActive: data.isActive,
        workedHours: data.workedHours + extraHours,
      },
    });
  }

  findAll(take: string, skip: string, isActive = true) {
    return this.prisma.campaign.findMany({
      take: take ? parseInt(take) : 10,
      skip: skip ? parseInt(skip) : 0,
      // where: { isActive: { equals: isActive } },
      orderBy: { createdAt: 'desc' },
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
