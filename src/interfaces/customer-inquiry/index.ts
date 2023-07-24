import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInquiryInterface {
  id?: string;
  inquiry_details: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerInquiryGetQueryInterface extends GetQueryInterface {
  id?: string;
  inquiry_details?: string;
  user_id?: string;
}
