import * as yup from 'yup';

export const loanApplicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  cashback_offer_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
