import * as Yup from "yup";

export const workExperienceDetails = Yup.object({
  industry: Yup.string().required("Industry name is required"),
  role: Yup.string(),
  mahindraDealerName: Yup.string(),
  from_date: Yup.string(),
  to_date: Yup.string(),
});
