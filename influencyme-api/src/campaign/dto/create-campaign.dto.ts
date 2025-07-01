import { ApiProperty } from '@nestjs/swagger';
export class CreateCampaignDto {
  @ApiProperty({ required: true, type: String })
  name: string;
  @ApiProperty({ required: true, type: Date })
  startDate: Date;
  @ApiProperty({ required: true, type: Date })
  endDate: Date;
  @ApiProperty({ required: false, type: Number })
  cost: number;
  @ApiProperty({ required: true, type: String })
  description: string;
  @ApiProperty({ required: false, type: Number })
  workedHours: number;
  @ApiProperty({
    required: true,
    type: String,
    enum: ['TRADITIONAL', 'INFLUENCE'],
  })
  type: 'TRADITIONAL' | 'INFLUENCE';
  @ApiProperty({ required: false, type: Boolean })
  isActive?: boolean;
}
