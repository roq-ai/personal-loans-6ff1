import axios from 'axios';
import queryString from 'query-string';
import { LoanApplicationInterface, LoanApplicationGetQueryInterface } from 'interfaces/loan-application';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLoanApplications = async (
  query?: LoanApplicationGetQueryInterface,
): Promise<PaginatedInterface<LoanApplicationInterface>> => {
  const response = await axios.get('/api/loan-applications', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLoanApplication = async (loanApplication: LoanApplicationInterface) => {
  const response = await axios.post('/api/loan-applications', loanApplication);
  return response.data;
};

export const updateLoanApplicationById = async (id: string, loanApplication: LoanApplicationInterface) => {
  const response = await axios.put(`/api/loan-applications/${id}`, loanApplication);
  return response.data;
};

export const getLoanApplicationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/loan-applications/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLoanApplicationById = async (id: string) => {
  const response = await axios.delete(`/api/loan-applications/${id}`);
  return response.data;
};
