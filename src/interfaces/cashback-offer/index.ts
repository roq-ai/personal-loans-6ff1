import { LoanApplicationInterface } from 'interfaces/loan-application';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CashbackOfferInterface {
  id?: string;
  offer_details: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  loan_application?: LoanApplicationInterface[];
  organization?: OrganizationInterface;
  _count?: {
    loan_application?: number;
  };
}

export interface CashbackOfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  offer_details?: string;
  organization_id?: string;
}
