export type ClientCreate = Omit<Client, 'createdAt' | 'updatedAt'>;

export interface Client {
  id: string;
  phone: string;
  client: string;
  email: string;
  password: string;
  brf: string;
  org: string;
  areacode: string;
  address: string;
  company: string;
  fromDate: string | null;
  toDate: string | null;
  createdAt: string;
  updatedAt?: string;
}
