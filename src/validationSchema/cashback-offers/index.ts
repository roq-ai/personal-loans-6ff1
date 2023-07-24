import * as yup from 'yup';

export const cashbackOfferValidationSchema = yup.object().shape({
  offer_details: yup.string().required(),
  organization_id: yup.string().nullable(),
});
