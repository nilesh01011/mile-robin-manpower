import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import EmployeeDetails from "./employeeDetails/EmployeeDetails";
import BankDetails from "./bankDetails/BankDetails";
import RoleDetails from "./roleDetails/RoleDetails";
import WorkExperience from "./workExperience/WorkExperience";

function UserDetailsFieldShow({
  // for hidding and show submit
  userDetailsFormShow,
  setUserDetailsFormShow,
  // drawer closed event
  handleDrawerClosed,
  // user validate typed data
  values,
  // show submit animation
  setSubmitData,
  submitData,
}) {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <div className="addEmployeeDetails">
        {/* Employee Details accordions */}
        <EmployeeDetails values={values} />

        {/* bank details accordions */}
        <BankDetails values={values} />

        {/* role details */}
        <RoleDetails values={values} />

        {/* Work Experience details */}
        <WorkExperience values={values} />
      </div>
      {/* footer */}
      <div
        className="actionEmployeeFooter"
        style={{
          boxShadow:
            theme === "light"
              ? "0px -2px 4px 0px rgba(0, 0, 0, 0.15)"
              : "rgb(255 255 255 / 15%) 0px -1px 1px 0px",
          backgroundColor: theme === "light" ? "#FFFFFF" : "#0B0B0C",
        }}
      >
        {/* left btns */}
        <button
          className="btns outlineBtn"
          type="button"
          onClick={() => handleDrawerClosed()}
        >
          Cancel
        </button>
        {/* right btns */}
        <button
          className="btns primaryBtn"
          type="submit"
          aria-label="submit"
          onClick={() => {
            setSubmitData(!submitData);
            setUserDetailsFormShow(!userDetailsFormShow);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default UserDetailsFieldShow;
