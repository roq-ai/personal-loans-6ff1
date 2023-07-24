import { CashbackOfferInterface } from 'interfaces/cashback-offer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LoanApplicationInterface {
  id?: string;
  status: string;
  cashback_offer_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  cashback_offer?: CashbackOfferInterface;
  user?: UserInterface;
  _count?: {};
}

export interface LoanApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  cashback_offer_id?: string;
  user_id?: string;
}
