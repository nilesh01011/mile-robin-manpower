import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Overlay from "../../../../../components/overlay/Overlay";
import InputField from "../../../../../components/inputField/InputField";
import CalendarInput from "../../../../../components/calendarInput";
import Dropdown from "../../../../../components/dropdown/Dropdown";

function ActionEmployeeDrawer({
  actionEmployeeDrawer,
  setActionEmployeeDrawer,
}) {
  const theme = useSelector((state) => state.theme);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [motherName, setMotherName] = useState("");
  //   const [firstName, setFirstName] = useState("");

  const genderItems = [
    {
        name:"male"
    },
    {
        name:"female"
    },
    {
        name:"other"
    }
  ];

  const businessNameItems = [
    {
        name:"AD"
    },
    {
        name:"AD 1"
    },
    {
        name:"AD 2"
    },
    {
        name:"AD 3"
    },
  ]
  return (
    <>
      <Overlay
        showOverlay={actionEmployeeDrawer}
        hideOverlay={setActionEmployeeDrawer}
      />
      {/* contents */}
      <div
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
            onClick={() => setActionEmployeeDrawer(!actionEmployeeDrawer)}
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
                fill="#0B0B0C"
              />
            </svg>
          </span>
        </div>

        {/* grid container */}
        <div className="actionEmployeeContainer">
          <div
            className="actionEmployeeContents"
            style={{ backgroundColor: theme === "light" ? "#F2F2F2" : "" }}
          >
            <div className="gridItems">
              <label style={{ color: "#545454" }}>
                First Name<span style={{ color: "red" }}>*</span>
              </label>
              <InputField
                types="text"
                placeholder="Enter first name"
                inputTypes="text"
                text={firstName}
              />
            </div>

            <div className="gridItems">
              <label style={{ color: "#545454" }}>
                Last Name<span style={{ color: "red" }}>*</span>
              </label>
              <InputField
                types="text"
                placeholder="Enter last name"
                inputTypes="text"
                text={lastName}
              />
            </div>

            <div className="gridItems">
              <label style={{ color: "#545454" }}>
                Mother's Name<span style={{ color: "red" }}>*</span>
              </label>
              <InputField
                types="text"
                placeholder="Enter mother's name"
                inputTypes="text"
                text={motherName}
              />
            </div>

            <div className="gridItems">
              <label style={{ color: "#545454" }}>
                Date of Birth<span style={{ color: "red" }}>*</span>
              </label>
              <CalendarInput />
            </div>

            {/* dropdown */}
            <div className="gridItems">
              <label style={{ color: "#545454" }}>Gender<span style={{ color: "red" }}>*</span></label>
              <Dropdown items={genderItems} />
            </div>

            <div className="gridItems">
              <label style={{ color: "#545454" }}>Business Name<span style={{ color: "red" }}>*</span></label>
              <Dropdown items={businessNameItems} />
            </div>
          </div>
        </div>

        {/* footer */}
        <div
          className="actionEmployeeFooter"
          style={{
            boxShadow:
              theme === "light"
                ? "0px -2px 4px 0px rgba(0, 0, 0, 0.15)"
                : "rgb(255 255 255 / 15%) 0px -1px 1px 0px",
          }}
        >
          {/* left btns */}
          <button className="btns outlineBtn" type="button">
            Cancel
          </button>
          {/* right btns */}
          <button className="btns primaryBtn" type="button">
            Validate
          </button>
        </div>
      </div>
    </>
  );
}

export default ActionEmployeeDrawer;
