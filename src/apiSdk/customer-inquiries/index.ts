import axios from 'axios';
import queryString from 'query-string';
import { CustomerInquiryInterface, CustomerInquiryGetQueryInterface } from 'interfaces/customer-inquiry';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCustomerInquiries = async (
  query?: CustomerInquiryGetQueryInterface,
): Promise<PaginatedInterface<CustomerInquiryInterface>> => {
  const response = await axios.get('/api/customer-inquiries', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCustomerInquiry = async (customerInquiry: CustomerInquiryInterface) => {
  const response = await axios.post('/api/customer-inquiries', customerInquiry);
  return response.data;
};

export const updateCustomerInquiryById = async (id: string, customerInquiry: CustomerInquiryInterface) => {
  const response = await axios.put(`/api/customer-inquiries/${id}`, customerInquiry);
  return response.data;
};

export const getCustomerInquiryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/customer-inquiries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCustomerInquiryById = async (id: string) => {
  const response = await axios.delete(`/api/customer-inquiries/${id}`);
  return response.data;
};
