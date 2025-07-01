enum CampaignType {
  influencer = 'influencer',
  traditional = 'traditional',
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
}
