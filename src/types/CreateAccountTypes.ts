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
}

export interface TermsAndConditionsResponse {
  id: number;
  description: string;
  createdAt: string;
}
