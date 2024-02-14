import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Overlay from "../../../../../components/overlay/Overlay";
// import InputField from "../../../../../components/inputField/InputField";
// import CalendarInput from "../../../../../components/calendarInput";
// import Dropdown from "../../../../../components/dropdown/Dropdown";
// import { useFormik } from "formik";
// import { employeeExists } from "../../../../../formikSchema/addEmployee";
import LoadingCircle from "../../../../../components/loadingCircle/LoadingCircle";
// import axios from "axios";
// import moment from "moment";
// import UserNotExists from "./userNotExists/UserNotExists";
// import UserExistsWithActive from "./userExistsWithActive/UserExistsWithActive";
// import UserExistsButInactive from "./userExistsButInactive/UserExistsButInactive";
// import AddEmployeeDetails from "./addEmployeeDetails/AddEmployeeDetails";
import UserValidate from "./components/userValidate/UserValidate";
import ResultDataShow from "./components/resultDataShow/ResultDataShow";
import UserDetailsFieldShow from "./components/userDetailsFieldShow/UserDetailsFieldShow";
import MileIDGenerate from "./components/mileIDGenerate/MileIDGenerate";

function ActionEmployeeDrawer({
  actionEmployeeDrawer,
  setActionEmployeeDrawer,
}) {
  const theme = useSelector((state) => state.theme);

  const [isLoading, setIsLoading] = useState(false);
  // validates show
  const [userValidate, setUserValidate] = useState(true);

  // user result validates details
  const [resultShow, setResultShow] = useState(false);

  // user details form show
  const [userDetailsFormShow, setUserDetailsFormShow] = useState(false);

  const [resultsValues, setResultValues] = useState([]);

  // user not exists
  const [userNotExists, setUserNotExists] = useState(false);
  // user exists but inactive
  const [userExistsButInActive, setUserExistsButInActive] = useState(false);
  // user exists with active
  const [userExistsWithActive, setUserExistsWithActive] = useState(false);

  // handle Regignation Submit
  // const handleRegignationSubmit = () => {};
  // submitData
  const [submitData, setSubmitData] = useState(false);
  // mile id generated
  const [mileIDGenerate, setMileIDGenerate] = useState(false);

  // handle drawer closed
  const handleDrawerClosed = () => {
    setActionEmployeeDrawer(!actionEmployeeDrawer);
    // user add details result false
    setResultShow(false);
    // submit data false
    setSubmitData(false);
    // mile id text changes false
    setMileIDGenerate(false);
    // user Details Form Show
    setUserDetailsFormShow(false);
    // user validate shwo first
    setUserValidate(true);

    // userNotExists
    setUserNotExists(false)

    // user exists active
    setUserExistsWithActive(false)

    // user with inactive
    setUserExistsButInActive(false)
  };

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
      <div
        className="drawerContainer actionEmployeeDrawer"
        style={{
          backgroundColor: theme === "light" ? "#FFF" : "#0B0B0C",
          width: "93%",
          right: actionEmployeeDrawer ? 0 : "-150%",
        }}
      >
        {/* header */}
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
          <span className="drawerTitle">
            {/* {submitData
              ? "Employee Added Successfully"
              : mileIDGenerate
              ? "Mile ID Generated Successfully"
              : "Add Employee"} */}
            Add Employee
          </span>
          {/* icons */}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleDrawerClosed();
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
        {/* content */}
        <div className="actionEmployeeContainer">
          {/* user validates */}
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
          ) : (
            <>
              {/* user validates */}
              {userValidate && (
                <UserValidate
                  // loading
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  // user validate content
                  userValidate={userValidate}
                  setUserValidate={setUserValidate}
                  // result show
                  setResultShow={setResultShow}
                  // user typed data
                  setResultValues={setResultValues}
                  // user exists but in active
                  setUserExistsButInActive={setUserExistsButInActive}
                  // user exists with active
                  setUserExistsWithActive={setUserExistsWithActive}
                  // user not exists
                  setUserNotExists={setUserNotExists}
                  userNotExists={userNotExists}
                  // drader closed event
                  handleDrawerClosed={handleDrawerClosed}
                />
              )}
              {/* result show */}
              {resultShow && (
                <ResultDataShow
                  resultsValues={resultsValues}
                  userExistsWithActive={userExistsWithActive}
                  userNotExists={userNotExists}
                  // drawer closed event
                  handleDrawerClosed={handleDrawerClosed}
                  // User Details Form Show
                  setUserDetailsFormShow={setUserDetailsFormShow}
                  userDetailsFormShow={userDetailsFormShow}
                  // results show then next steps
                  setResultShow={setResultShow}
                  resultShow={resultShow}

                  // userExistsButInactive
                  userExistsButInActive={userExistsButInActive}
                />
              )}
              {/* user details show */}
              {userDetailsFormShow && (
                <UserDetailsFieldShow
                  // for hidding and show submit
                  userDetailsFormShow={userDetailsFormShow}
                  setUserDetailsFormShow={setUserDetailsFormShow}
                  // drawer closed event
                  handleDrawerClosed={handleDrawerClosed}
                  // user validate typed data
                  values={resultsValues}
                  // show submit animation
                  setSubmitData={setSubmitData}
                  submitData={submitData}
                />
              )}

              {/* submit animation show */}
              {submitData && (
                <MileIDGenerate
                  // user validate typed data
                  values={resultsValues}
                  // drawer closed event
                  handleDrawerClosed={handleDrawerClosed}
                  // mile ID
                />
              )}
            </>
          )}

          {/* resultShow */}
        </div>
        {/* footer */}
        {/* <div
          className="actionEmployeeFooter"
          style={{
            boxShadow:
              theme === "light"
                ? "0px -2px 4px 0px rgba(0, 0, 0, 0.15)"
                : "rgb(255 255 255 / 15%) 0px -1px 1px 0px",
            backgroundColor: theme === "light" ? "#FFFFFF" : "#0B0B0C",
          }}
        >
          user validates footer
          left btns
          <button
            className="btns outlineBtn"
            type="reset"
            onClick={() => {
              handleDrawerClosed();
            }}
          >
            same Cancel btn
          </button>
          right btns
          {userExistsWithActive ? (
            <button
              className="btns primaryBtn"
              type="button"
              aria-label="button"
              onClick={() => handleRegignationSubmit()}
            >
              Send Notification
            </button>
          ) : resultShow ? (
            <button
              className="btns primaryBtn"
              type="button"
              aria-label="button"
              onClick={() => {
                setAddEmployeeDetailsShow(!addEmployeeDetailsShow);
                setResultShow(!resultShow);
              }}
            >
              Add Employee user not exists
            </button>
          ) : addEmployeeDetailsShow ? (
            submitData === false && (
              <button
                className="btns primaryBtn"
                type="button"
                aria-label="button"
                onClick={() => setSubmitData(!submitData)}
              >
                submit
              </button>
            )
          ) : (
            <button
              className="btns primaryBtn"
              type="submit"
              aria-label="submit"
            >
              Validate
            </button>
          )}

          {resultShow ? (
            userNotExists ? (
              <button
                className="btns primaryBtn"
                type="button"
                aria-label="button"
                onClick={() => {
                  setAddEmployeeDetailsShow(!addEmployeeDetailsShow);
                  setResultShow(!resultShow);
                }}
              >
                Add Employee
              </button>
            ) : (
              "submit"
            )
          ) : userExistsWithActive ? (
            <button
              className="btns primaryBtn"
              type="submit"
              aria-label="submit"
              onClick={() => handleRegignationSubmit()}
            >
              Send Notification
            </button>
          ) : (
            <button
              className="btns primaryBtn"
              type="submit"
              aria-label="submit"
            >
              Validate
            </button>
          )}
        </div> */}
      </div>
    </>
  );
}

export default ActionEmployeeDrawer;
