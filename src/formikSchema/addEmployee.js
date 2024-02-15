import * as Yup from 'yup';

export const employeeExists = Yup.object({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  mother_name: Yup.string().required("Mother's name is required"),
  date_birth: Yup.string().required('Date of Birth is required'),
  gender: Yup.string().required('Gender is required'),
  businessName: Yup.string().required('Business name is required'),
});
