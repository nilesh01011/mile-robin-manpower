import * as Yup from "yup";

// Changed password
export const changePassword = Yup.object({
  old_password: Yup.string().required("Old password was required"),
  new_password: Yup.string()
    .min(10)
    .required("Password must contain at least 10 characters"),
  confirm_password: Yup.string()
    .required()
    .oneOf(
      [Yup.ref("new_password"), null],
      "Password you entered is not matched!"
    ),
});
