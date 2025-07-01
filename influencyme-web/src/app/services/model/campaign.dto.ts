export enum CampaignType {
  INFLUENCE = 'INFLUENCE',
  TRADITIONAL = 'TRADITIONAL',
}

export interface Campaign {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  cost: number;
  description: string;
  workedHours: number;
  type: CampaignType;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}
