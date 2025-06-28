export type UsrUserGraphQLResp = {
  usrUsersNewFuzzySearch: {
    nodes: {
      id: string;
      name: string;
      socialName: string;
      isActive: boolean;
      birthdate: string;
      gender: string;
      filiation1?: string;
      filiation2?: string;
      mailAddress: string;
      age: number;
      usrEmployees?: {
        nodes: {
          id: string;
          position?: string;
          organization?: {
            id: string;
            name: string;
            shortName: string;
            mailAddress?: string;
            mainOrganizationPhone?: {
              id: string;
              contactInfo?: string;
              number: string;
              countryCode: number;
              type: string;
            };
            mainOrganizationAddress?: {
              id: string;
              city: string;
              complement?: string;
              country: string;
              number: string;
              state: string;
              street: string;
              type: string;
              district: string;
              zipCode: string;
            };
            mainOrganizationDocument?: {
              id: string;
              complement?: string;
              value: string;
            };
          };
        }[];
      };
      usrDocuments?: {
        nodes: {
          id: string;
          complement?: string;
          value: string;
          valueUnique: string;
        }[];
      };
      usrAddresses: {
        nodes: {
          id: string;
          street: string;
          number: string;
          zipCode: string;
          complement?: string;
          city: string;
          state: string;
          country: string;
          district: string;
        }[];
      };
      usrPhones: {
        nodes: {
          id: string;
          countryCode: number;
          number: string;
        }[];
      };
      usrMainDocument: {
        id: string;
        value: string;
        complement?: string;
      };
      usrMainPhone?: {
        id: string;
        countryCode: number;
        number: string;
      };
      usrMainAddress: {
        id: string;
        street: string;
        number: string;
        zipCode: string;
        complement?: string;
        city: string;
        state: string;
        country: string;
        district: string;
      };
    }[];
  };
};
