import * as Yup from "yup";

// Login User DataSchema
export const loginSchema = Yup.object({
  id: Yup.string().required("!This field is required"),
  password: Yup.string()
    .min(6)
    .required("!Password you entered is not matched!"),
});