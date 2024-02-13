import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import InputFields from "./inputFields";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../../../formikSchema/changePassword";

// formik form initial values
const initialValues = {
  old_password: "",
  new_password: "",
  confirm_password: "",
};

function ChangePassword({ handleCloseModel }) {
  const theme = useSelector((state) => state.theme);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const router = useNavigate();
  // useFormik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: changePassword,
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        // console.log(values);
        action.resetForm();
        setPasswordChanged(true);
      },
    });

  const handleLoginAgain = () => {
    router("/");
  };

  return (
    <>
      <div
        className="changePasswordContainer"
        style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
      >
        {passwordChanged ? (
          <>
            <div className="heads">
              {/* text */}
              <span>Password Changed Successful</span>
            </div>
            {/* divider */}
            <div
              className="divider"
              style={{
                backgroundColor: theme === "light" ? "#e6e6e6" : "#635d5d",
              }}
            ></div>

            <p style={{ paddingLeft: 25, marginTop: 8, marginBottom: 20 }}>
              Your password has been changed successfully. Please login with
              your new credentials
            </p>
            {/* clicked to go login */}
            <button type="button" onClick={() => handleLoginAgain()}>
              Okay
            </button>
          </>
        ) : (
          <>
            <div className="heads">
              {/* text */}
              <span>Change Password</span>
              {/* cancel icons */}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleCloseModel()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.93181 1.9318C2.10754 1.75607 2.39247 1.75607 2.5682 1.9318L9 8.3636L15.4318 1.9318C15.6075 1.75607 15.8925 1.75607 16.0682 1.9318C16.2439 2.10754 16.2439 2.39246 16.0682 2.5682L9.6364 9L16.0682 15.4318C16.2439 15.6075 16.2439 15.8925 16.0682 16.0682C15.8925 16.2439 15.6075 16.2439 15.4318 16.0682L9 9.63639L2.5682 16.0682C2.39247 16.2439 2.10754 16.2439 1.93181 16.0682C1.75607 15.8925 1.75607 15.6075 1.93181 15.4318L8.36361 9L1.9318 2.5682C1.75607 2.39246 1.75607 2.10754 1.93181 1.9318Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
            {/* divider */}
            <div
              className="divider"
              style={{
                backgroundColor: theme === "light" ? "#e6e6e6" : "#635d5d",
              }}
            ></div>

            {/* forms */}
            <form
              onSubmit={handleSubmit}
              method="post"
              autoComplete="off"
              className="formContainer"
            >
              {/* old password */}
              <InputFields
                name="old_password"
                label="Old Password"
                type="password"
                mandatory={true}
                errors={errors.old_password}
                touched={touched.old_password}
                handleBlur={handleBlur}
                onChange={handleChange}
                values={values.old_password}
                placeholder="Enter old password"
              />
              {/* new password */}
              <InputFields
                name="new_password"
                label="New Password"
                type="password"
                mandatory={true}
                errors={errors.new_password}
                touched={touched.new_password}
                handleBlur={handleBlur}
                onChange={handleChange}
                values={values.new_password}
                placeholder="Enter new password"
              />
              {/* confirm password */}
              <InputFields
                name="confirm_password"
                label="Confirm Password"
                type="password"
                mandatory={true}
                errors={errors.confirm_password}
                touched={touched.confirm_password}
                handleBlur={handleBlur}
                onChange={handleChange}
                values={values.confirm_password}
                placeholder="Enter confirm password"
              />

              {/* submit button */}
              <div className="btns">
                <button type="submit" title="Changed your password to clicked">
                  change password
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default ChangePassword;
