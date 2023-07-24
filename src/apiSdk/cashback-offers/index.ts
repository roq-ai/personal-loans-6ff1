import axios from 'axios';
import queryString from 'query-string';
import { CashbackOfferInterface, CashbackOfferGetQueryInterface } from 'interfaces/cashback-offer';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCashbackOffers = async (
  query?: CashbackOfferGetQueryInterface,
): Promise<PaginatedInterface<CashbackOfferInterface>> => {
  const response = await axios.get('/api/cashback-offers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCashbackOffer = async (cashbackOffer: CashbackOfferInterface) => {
  const response = await axios.post('/api/cashback-offers', cashbackOffer);
  return response.data;
};

export const updateCashbackOfferById = async (id: string, cashbackOffer: CashbackOfferInterface) => {
  const response = await axios.put(`/api/cashback-offers/${id}`, cashbackOffer);
  return response.data;
};

export const getCashbackOfferById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/cashback-offers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCashbackOfferById = async (id: string) => {
  const response = await axios.delete(`/api/cashback-offers/${id}`);
  return response.data;
};
