export interface CreateAccountArgs {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  address: Address;
  avatar: string;
  password: string;
  confirmPassword: string;
}

export interface Address {
  street: string;
  number: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  fullAddress?: string;
  streetName?: string;
  streetNumber?: string;
  googlePlaceId?: string;
  lng?: number;
  lat?: number;
  suburb?: string;
  postcode?: string;
}

export interface TermsAndConditionsResponse {
  id: number;
  description: string;
  createdAt: string;
}

export type CreateAccountSteps =
  | 'CreateYourAccount'
  | 'WhereAreYouLocated'
  | 'LetsSecureYourAccount'
  | 'UploadProfilePicture';
