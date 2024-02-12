import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Overlay from "../../../../../components/overlay/Overlay";
// import InputField from "../../../../../components/inputField/InputField";
// import CalendarInput from "../../../../../components/calendarInput";
// import Dropdown from "../../../../../components/dropdown/Dropdown";
import { useFormik } from "formik";
import { employeeExists } from "../../../../../formikSchema/addEmployee";
import LoadingCircle from "../../../../../components/loadingCircle/LoadingCircle";
import axios from "axios";
import moment from "moment";
import UserNotExists from "./userNotExists/UserNotExists";
import UserExistsWithActive from "./userExistsWithActive/UserExistsWithActive";
import UserExistsButInactive from "./userExistsButInactive/UserExistsButInactive";
import FirstUserValidate from "./firstUserValidate/FirstUserValidate";
import AddEmployeeDetails from "./addEmployeeDetails/AddEmployeeDetails";

function ActionEmployeeDrawer({
  actionEmployeeDrawer,
  setActionEmployeeDrawer,
}) {
  const theme = useSelector((state) => state.theme);

  const [isLoading, setIsLoading] = useState(false);

  // user validates details
  const [resultShow, setResultShow] = useState(false);

  // add user details
  const [addEmployeeDetailsShow, setAddEmployeeDetailsShow] = useState(true);

  const [resultsValues, setResultValues] = useState([]);

  // user not exists
  const [userNotExists, setUserNotExists] = useState(false);
  // user exists but inactive
  const [userExistsButInActive, setUserExistsButInActive] = useState(false);
  // user exists with active
  const [userExistsWithActive, setUserExistsWithActive] = useState(false);

  // formikSchema form initial values
  const initialValues = {
    first_name: "",
    last_name: "",
    mother_name: "",
    date_birth: "",
    gender: "",
    businessName: "",
  };

  // useFormik
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    validationSchema: employeeExists,
    initialValues: initialValues,
    onSubmit: async (values, action) => {
      setIsLoading(true);

      // fetching to this setTimeout function
      try {
        const response = await axios.get("/mile-user-exists.json");

        const filterUserExists = response.data.filter((user) => {
          let firstNameExists = user.first_name
            .toLowerCase()
            .includes(values.first_name.toLowerCase());

          let lastNameExists = user.last_name
            .toLowerCase()
            .includes(values.last_name.toLowerCase());

          let motherNameExists = user.mother_name
            .toLowerCase()
            .includes(values.mother_name.toLowerCase());

          let date_birthExists = user.date_birth
            .toLowerCase()
            .includes(values.date_birth.toLowerCase());

          let genderExists = user.gender
            .toLowerCase()
            .includes(values.gender.toLowerCase());

          let businessNameExists = user.businessName
            .toLowerCase()
            .includes(values.businessName.toLowerCase());

          return (
            firstNameExists &&
            lastNameExists &&
            motherNameExists &&
            date_birthExists &&
            genderExists &&
            businessNameExists
          );
        });

        console.log("Filtered user exists:", filterUserExists);

        setResultShow(true);

        if (filterUserExists.length > 0) {
          // user found check it's active or inactive
          if (!filterUserExists[0].employeeStatus) {
            // console.log("user found but is inactive:", filterUserExists);
            setUserExistsButInActive(true);

            setResultValues(filterUserExists);
          }

          // user exists with active
          if (filterUserExists[0].employeeStatus) {
            setUserExistsWithActive(true);

            setResultValues(filterUserExists);
          }
        }

        // user not exists
        if (filterUserExists.length === 0) {
          console.log("user not found:", values);
          setUserNotExists(!userNotExists);

          setResultValues([values]);
          console.log("user not found:", values);
        }

        action.resetForm();
      } catch (error) {
        console.error("Error fetching ", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    },
  });

  // handle drawer closed
  const handleDrawerClosed = () => {
    setActionEmployeeDrawer(!actionEmployeeDrawer);
    setResultShow(false);
  };

  // handle Regignation Submit
  const handleRegignationSubmit = () => {};

  return (
    <>
      <Overlay
        showOverlay={actionEmployeeDrawer}
        hideOverlay={setActionEmployeeDrawer}
      />
      {/* <div
        className="overlay"
        style={{
          display: actionEmployeeDrawer ? 'block' : 'none',
          backgroundColor:
            theme === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(84, 84, 84, 0.8)',
        }}
        onClick={() => handleDrawerClosed()}
      /> */}
      {/* contents */}
      <form
        onSubmit={handleSubmit}
        method="post"
        autoComplete="off"
        className="drawerContainer actionEmployeeDrawer"
        style={{
          backgroundColor: theme === "light" ? "#FFF" : "#0B0B0C",
          width: "93%",
          right: actionEmployeeDrawer ? 0 : "-150%",
        }}
      >
        {/* headers */}
        <div
          className="actionEmployeeDrawerHeader"
          style={{
            boxShadow:
              theme === "light"
                ? "0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
                : "rgb(255 255 255 / 15%) 0px 1px 1px 0px",
          }}
        >
          {/* text */}
          <span className="title">Add Employee</span>
          {/* icons */}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setActionEmployeeDrawer(!actionEmployeeDrawer);
              setResultShow(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.45529 3.45535C3.61801 3.29263 3.88183 3.29263 4.04455 3.45535L9.99992 9.41072L15.9553 3.45535C16.118 3.29263 16.3818 3.29263 16.5445 3.45535C16.7073 3.61807 16.7073 3.88189 16.5445 4.04461L10.5892 9.99998L16.5445 15.9554C16.7073 16.1181 16.7073 16.3819 16.5445 16.5446C16.3818 16.7073 16.118 16.7073 15.9553 16.5446L9.99992 10.5892L4.04455 16.5446C3.88183 16.7073 3.61801 16.7073 3.45529 16.5446C3.29257 16.3819 3.29257 16.1181 3.45529 15.9554L9.41066 9.99998L3.45529 4.04461C3.29257 3.88189 3.29257 3.61807 3.45529 3.45535Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>

        <div className="actionEmployeeContainer">
          {isLoading ? (
            <div className="loadingContainer">
              {/* loading img */}
              <div>
                <LoadingCircle width={260} height={260} />
              </div>
              {/* text */}
              <span style={{ color: theme === "light" ? "#262626" : "#fff" }}>
                Validating Employee Details...
              </span>
            </div>
          ) : resultShow ? (
            <>
              <div className="resultDataShow">
                {/* title */}
                <h5 className="title">Employee Details</h5>
                {/* data result */}
                <div
                  className="resultValues"
                  style={{
                    backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                    borderColor: theme === "light" ? "#E6E6E6" : "#232324",
                  }}
                >
                  {/* first name */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === "light" ? "#545454" : "#545454",
                      }}
                    >
                      First Name:
                    </span>
                    <span>{resultsValues[0]?.first_name}</span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                    }}
                  />
                  {/* last name */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === "light" ? "#545454" : "#545454",
                      }}
                    >
                      Last Name:
                    </span>
                    <span>{resultsValues[0]?.last_name}</span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                    }}
                  />
                  {/* mother name */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === "light" ? "#545454" : "#545454",
                      }}
                    >
                      Mother's Name:
                    </span>
                    <span>{resultsValues[0]?.mother_name}</span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                    }}
                  />
                  {/* date of birth */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === "light" ? "#545454" : "#545454",
                      }}
                    >
                      date of birth:
                    </span>
                    <span>
                      {moment(resultsValues[0]?.date_birth).format(
                        "DD MMM YYYY"
                      )}
                    </span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                    }}
                  />
                  {/* gender */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === "light" ? "#545454" : "#545454",
                      }}
                    >
                      Gender:
                    </span>
                    <span>{resultsValues[0]?.gender}</span>
                  </div>
                  {/* divided */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                    }}
                  />
                  {/* business name */}
                  <div className="resultValuesItems">
                    <span
                      style={{
                        color: theme === "light" ? "#545454" : "#545454",
                      }}
                    >
                      Business Name:
                    </span>
                    <span>{resultsValues[0]?.businessName}</span>
                  </div>
                </div>
                {/* messages container */}
                {userNotExists ? (
                  <UserNotExists />
                ) : userExistsWithActive ? (
                  <UserExistsWithActive />
                ) : (
                  <UserExistsButInactive />
                )}
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
                  onClick={() => {
                    handleDrawerClosed();
                  }}
                >
                  Cancel
                </button>
                {/* right btns */}
                {userNotExists || userExistsButInActive ? (
                  <button
                    className="btns primaryBtn"
                    type="submit"
                    aria-label="submit"
                    onClick={() => {
                      setAddEmployeeDetailsShow(!addEmployeeDetailsShow);
                      setResultShow(!resultShow);
                    }}
                  >
                    Add Employee
                  </button>
                ) : (
                  userExistsWithActive && (
                    <button
                      className="btns primaryBtn"
                      type="submit"
                      aria-label="submit"
                      onClick={() => handleRegignationSubmit()}
                    >
                      Send Notification
                    </button>
                  )
                )}
              </div>
            </>
          ) : addEmployeeDetailsShow ? (
            <AddEmployeeDetails values={values} handleDrawerClosed={handleDrawerClosed} />
          ) : (
            <FirstUserValidate
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleDrawerClosed={handleDrawerClosed}
            />
          )}
        </div>
      </form>
    </>
  );
}

export default ActionEmployeeDrawer;
