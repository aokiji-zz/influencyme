// create-campaign.dto.ts
export class CreateCampaignDto {
  name: string;
  startDate: Date;
  endDate: Date;
  cost: number;
  description: string;
  workedHours: number;
  type: 'TRADITIONAL' | 'INFLUENCE';
}
