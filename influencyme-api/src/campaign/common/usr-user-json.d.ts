export type User = {
  ID: number;
  //   CreatedAt: string;
  //   UpdatedAt: string;
  //   DeletedAt: string | null;
  name: string;
  socialName: string;
  isActive: boolean;
  birthdate: string;
  gender: string;
  filiation1: string;
  filiation2: string;
  mailAddress: string;
  age: number;
  mainDocument: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    complement: string;
    value: string;
    // UsrUserID: number;
  };
  mainPhone: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    countryCode: number;
    number: string;
    // UsrUserID: number;
  };
  mainAddress: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    street: string;
    number: string;
    zipCode: string;
    complement: string;
    city: string;
    state: string;
    country: string;
    district: string;
    // UsrUserID: number;
  };
  addresses: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    street: string;
    number: string;
    zipCode: string;
    complement: string;
    city: string;
    state: string;
    country: string;
    district: string;
    // UsrUserID: number;
  }[];
  phones: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    countryCode: number;
    number: string;
    // UsrUserID: number;
  }[];
  documents: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    complement: string;
    value: string;
    valueUnique: string;
    // UsrUserID: number;
  }[];
  employees: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    position: string;
    organization: {
      ID: number;
      CreatedAt: string;
      UpdatedAt: string;
      DeletedAt: string | null;
      mailAddress: string;
      name: string;
      shortName: string;
      mainOrganizationAddress: {
        ID: number;
        CreatedAt: string;
        UpdatedAt: string;
        DeletedAt: string | null;
        city: string;
        complement: string;
        district: string;
        country: string;
        number: string;
        state: string;
        street: string;
        type: string;
        zipCode: string;
        UsrOrganizationID: number;
      };
      mainOrganizationDocument: {
        ID: number;
        CreatedAt: string;
        UpdatedAt: string;
        DeletedAt: string | null;
        complement: string;
        value: string;
        UsrOrganizationID: number;
      };
      mainOrganizationPhone: {
        ID: number;
        CreatedAt: string;
        UpdatedAt: string;
        DeletedAt: string | null;
        countryCode: number;
        number: string;
        contactInfo: string;
        type: string;
        // UsrOrganizationID: number;
      };
      type: string;
      isActive: boolean;
      mainActivitie: {
        ID: number;
        CreatedAt: string;
        UpdatedAt: string;
        DeletedAt: string | null;
        code: string;
        description: string;
        // UsrOrganizationID: number;
      };
      employees: {
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
    // UsrOrganizationID: number;
    // UsrUserID: number;
  }[];
};
