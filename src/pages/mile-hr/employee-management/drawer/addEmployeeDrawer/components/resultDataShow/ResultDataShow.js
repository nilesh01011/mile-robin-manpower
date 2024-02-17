import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import moment from "moment";
import UserExistsButInactive from "../../messagesBox/userExistsButInactive/UserExistsButInactive";
import UserExistsWithActive from "../../messagesBox/userExistsWithActive/UserExistsWithActive";
import UserNotExists from "../../messagesBox/userNotExists/UserNotExists";

function ResultDataShow({
  resultsValues,
  userNotExists,
  userExistsWithActive,
  handleDrawerClosed,
  // user Details Form Show
  setUserDetailsFormShow,
  userDetailsFormShow,
  // results show then next steps
  setResultShow,
  resultShow,

  // userExistsButInActive
  userExistsButInActive
}) {
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <div className="resultDataShow">
        {/* title */}
        <h5>Employee Details</h5>
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
              backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
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
              backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
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
              backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
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
              {moment(resultsValues[0]?.date_birth).format("DD MMM YYYY")}
            </span>
          </div>
          {/* divided */}
          <div
            className="divider"
            style={{
              backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
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
              backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
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
        {/* {userNotExists ? (
          <UserNotExists />
        ) : userExistsWithActive ? (
          <UserExistsWithActive />
        ) : (
          <UserExistsButInactive />
        )} */}

        {userNotExists && <UserNotExists />}

        {userExistsButInActive && <UserExistsButInactive />}

        {userExistsWithActive && <UserExistsWithActive />}

        {/* {userExistsWithActive ? (
          <UserExistsWithActive />
        ) : (
          <UserExistsButInactive />
        )} */}
      </div>

      {/* footer */}
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
        {/* left btn */}
        <button
          className="btns outlineBtn"
          type="reset"
          onClick={() => {
            handleDrawerClosed();
          }}
        >
          Cancel
        </button>
        {/* right btn */}
        {userExistsWithActive ? (
          <button
            className="btns primaryBtn"
            type="button"
            aria-label="button"
            onClick={() => {
              handleDrawerClosed();
            }}
          >
            Send Notification
          </button>
        ) : (
          <button
            className="btns primaryBtn"
            type="button"
            aria-label="button"
            onClick={() => {
              setUserDetailsFormShow(!userDetailsFormShow);
              setResultShow(!resultShow);
            }}
          >
            Add Employee
          </button>
        )}
      </div>

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
      left btns
      <button
        className="btns outlineBtn"
        type="button"
        onClick={() => {
          handleDrawerClosed();
        }}
      >
        Cancel
      </button>
      right btns
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
    </div> */}
    </>
  );
}

export default ResultDataShow;
