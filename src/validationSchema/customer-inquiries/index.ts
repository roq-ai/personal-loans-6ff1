import * as yup from 'yup';

export const customerInquiryValidationSchema = yup.object().shape({
  inquiry_details: yup.string().required(),
  user_id: yup.string().nullable(),
});
