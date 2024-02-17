import React, { useState } from "react";
import { useSelector } from "react-redux";
import Overlay from "../../../../../components/overlay/Overlay";
import "./styles.scss";
import moment from "moment";
import InputField from "../../../../../components/inputField/InputField";
import Dropdown from "../../../../../components/dropdown/Dropdown";
import CalendarInput from "../../../../../components/calendarInput";
import EditWorkExperience from "./drawer";
import { ConfigProvider } from "antd";
import SingleDatePicker from "../../../../../components/date/singleDatePicker/SingleDatePicker";
import CheckBoxSelectDropdown from "../../../../../components/checkBoxSelectDropdown/CheckBoxSelectDropdown";

function ViewTableData({
  viewTableDataDrawer,
  setViewTableDataDrawer,
  // Emplo data state
  setEmployeeDrawerData,
  employeeDrawerData,
}) {
  // console.log("Emplo data:", employeeDrawerData);
  const theme = useSelector((state) => state.theme);
  const [leftSideScrollBar, setLeftSideScrollBar] = useState(false);
  const userNameSplit = employeeDrawerData.employeeName
    ? employeeDrawerData.employeeName?.split(" ")
    : null;
  const firstLetter = userNameSplit?.[0]?.[0] || "";
  const lastLetter = userNameSplit?.[userNameSplit?.length - 1]?.[0] || "";

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isAccordionOpen_2, setIsAccordionOpen_2] = useState(false);
  const [isAccordionOpen_3, setIsAccordionOpen_3] = useState(false);
  const [isAccordionOpen_4, setIsAccordionOpen_4] = useState(false);

  const [editData, setEditData] = useState(false);
  const [editData1, setEditData1] = useState(false);
  const [editData2, setEditData2] = useState(false);
  const [editData3, setEditData3] = useState(false);

  const genderItems = [
    {
      name: "male",
    },
    {
      name: "female",
    },
  ];

  const city = [
    {
      name: "Maharashtra",
    },
    {
      name: "Maharashtra 1",
    },
    {
      name: "Maharashtra 2",
    },
  ];

  const state = [
    {
      name: "Maharashtra",
    },
    {
      name: "Maharashtra 1",
    },
    {
      name: "Maharashtra 2",
    },
  ];

  const district = [
    {
      name: "Maharashtra",
    },
    {
      name: "Maharashtra 1",
    },
    {
      name: "Maharashtra 2",
    },
  ];

  // role
  const dealerOperations = [
    {
      name: "sales",
    },
    {
      name: "service",
    },
  ];

  const department = [
    {
      name: "Department 1",
    },
    {
      name: "Department 2",
    },
  ];

  const role = [
    {
      name: "Warranty Administrator",
    },
    {
      name: "Warranty Administrator 1",
    },
    {
      name: "Warranty Administrator 2",
    },
  ];

  const designation = [
    {
      name: "Front End Developer",
    },
    {
      name: "Back End Developer",
    },
    {
      name: "UI/UX Designer",
    },
  ];

  const qualifications = [
    {
      name: "Qualifications 1",
    },
    {
      name: "Qualifications 2",
    },
  ];

  const skills = [
    {
      name: "Skills 1",
    },
    {
      name: "Skills 2",
    },
    {
      name: "Skills 3",
    },
  ];

  const reportManager = [
    {
      name: "Report Manager 1",
    },
    {
      name: "Report Manager 2",
    },
  ];

  const employeeType = [
    {
      name: "Permanent",
    },
    {
      name: "Contract",
    },
  ];

  const dealerLocation = [
    {
      name: "PRM01-P010901-FARIDABAD",
    },
    {
      name: "PRM01-P010901-MATHURA",
    },
    {
      name: "PRM01-SP010901-MATHURA",
    },
  ];

  const tbody = [
    {
      organisationname: "UNIQUE MOTORS GLOBE",
      dealer: "",
      location: "MALAD_SR",
      emp_role: "Dealer Principle",
      capabilityLevel: "",
      fromDate: "20 Jan 2021",
      toDate: "Current",
    },
    {
      organisationname: "UNIQUE MOTORS GLOBE",
      dealer: "",
      location: "MALAD_SR",
      emp_role: "Dealer Principle",
      capabilityLevel: "",
      fromDate: "24 Feb 2023",
      toDate: "Current",
    },
  ];

  const [editWorkExperienceDrawer, setEditWorkExperienceDrawer] =
    useState(false);

  const handleDatePickerChange = (dateString) => {
    // handleChange
    // handleChange("date_birth")(dateString);
    console.log(dateString);
  };

  // role based
  const [isCommonEmployee, setIsCommonEmployee] = useState("Yes");

  return (
    <>
      <Overlay
        showOverlay={viewTableDataDrawer}
        hideOverlay={setViewTableDataDrawer}
      />

      {/* contents */}
      <div
        className={`drawerContainer ${
          theme === "light" ? "light" : "dark"
        } actionEmployeeDrawer`}
        style={{
          backgroundColor: theme === "light" ? "#FFF" : "#0B0B0C",
          width: "93%",
          right: viewTableDataDrawer ? 0 : "-150%",
        }}
      >
        <div
          className="drawerDataHeader"
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
        >
          <h3>View Details</h3>
          <span onClick={() => setViewTableDataDrawer(!viewTableDataDrawer)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.45505 3.95529C3.61777 3.79257 3.88158 3.79257 4.0443 3.95529L9.99967 9.91066L15.955 3.95529C16.1178 3.79257 16.3816 3.79257 16.5443 3.95529C16.707 4.11801 16.707 4.38183 16.5443 4.54455L10.5889 10.4999L16.5443 16.4553C16.707 16.618 16.707 16.8818 16.5443 17.0445C16.3816 17.2073 16.1178 17.2073 15.955 17.0445L9.99967 11.0892L4.0443 17.0445C3.88158 17.2073 3.61777 17.2073 3.45505 17.0445C3.29233 16.8818 3.29233 16.618 3.45505 16.4553L9.41042 10.4999L3.45505 4.54455C3.29233 4.38183 3.29233 4.11801 3.45505 3.95529Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>

        {/* data */}
        <div className="drawerData">
          {/* left side */}
          <div
            className={`leftSide ${leftSideScrollBar && "activeScroll"} ${
              theme === "light" ? "light" : "dark"
            }`}
            style={{
              backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              boxShadow:
                theme === "light"
                  ? "1px 0px 1px 0px rgba(0, 0, 0, 0.15)"
                  : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
            }}
            onMouseEnter={() => setLeftSideScrollBar(true)}
            onMouseLeave={() => setLeftSideScrollBar(false)}
          >
            {/* user profile */}
            <div
              className="leftSideTopHeaders"
              style={{
                backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              }}
            >
              <div
                className={`userProfile ${
                  theme === "light" ? "lightTheme" : "darkTheme"
                }`}
                style={{
                  border: `1px solid ${
                    theme === "light" ? "#B5B5B6" : "#545454"
                  }`,
                  // backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
                }}
              >
                {/* user header section */}
                <div className="userImgNameId">
                  {/* user images */}
                  <div
                    className="userImg"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#545454",
                      border: `1px solid ${
                        theme === "light" ? "#B5B5B6" : "#545454"
                      }`,
                    }}
                  >
                    {/* {data.userImg ? (
                    <img src={data.userImg} alt={data.username} />
                  ) : (
                    <span
                      style={{
                        borderColor: theme === "light" ? "#DEDEDE" : "#635D5D",
                      }}
                    >
                      {firstLetter + "" + lastLetter}
                    </span>
                  )} */}
                    <span
                      style={{
                        borderColor: theme === "light" ? "#DEDEDE" : "#635D5D",
                      }}
                    >
                      {firstLetter + "" + lastLetter}
                    </span>
                  </div>
                  {/* user name and Id */}
                  <div className="userName_id">
                    <h3
                    // onMouseEnter={() =>
                    //   data.three.length > 22 && setTextTrucat(true)
                    // }
                    // onMouseLeave={() =>
                    //   data.three.length > 22 && setTextTrucat(false)
                    // }
                    >
                      {/* employee name */}
                      <span className="userName">
                        {employeeDrawerData?.employeeName}
                      </span>
                    </h3>
                    {/* employee code */}
                    {/* <p>{employeeDrawerData?.employeeCode}</p> */}
                    <p>13OU0579</p>
                  </div>
                </div>
                {/* divider */}
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                    margin: "10px 0",
                  }}
                />
                {/* Dealer code */}
                <p className="flexJustifyBetween">
                  <span
                    style={{ color: theme === "light" ? "#545454" : "#b5b5b6" }}
                  >
                    Dealer Code:
                  </span>
                  <span className="rightText">MU010451</span>
                </p>
                {/* divider */}
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                    margin: "10px 0",
                  }}
                />
                {/* location name */}
                <p className="flexJustifyBetween">
                  <span
                    style={{ color: theme === "light" ? "#545454" : "#b5b5b6" }}
                  >
                    Location Name:
                  </span>
                  <span className="rightText">
                    {employeeDrawerData?.employeeLocation}
                  </span>
                </p>
                {/* divider */}
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                    margin: "10px 0",
                  }}
                />
                {/* employee status */}
                <p className="flexJustifyBetween">
                  <span
                    style={{ color: theme === "light" ? "#545454" : "#b5b5b6" }}
                  >
                    Status:
                  </span>
                  <span
                    className="rightText"
                    style={{
                      color: employeeDrawerData?.employeeStatus
                        ? "#56AC18"
                        : "#ff3e5b",
                    }}
                  >
                    {employeeDrawerData?.employeeStatus ? "Active" : "Inactive"}
                  </span>
                </p>
                {/* divider */}
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                    margin: "10px 0",
                  }}
                />
                {/* employee status */}
                <p className="flexJustifyBetween">
                  <span
                    style={{ color: theme === "light" ? "#545454" : "#b5b5b6" }}
                  >
                    Active Since:
                  </span>
                  <span className="rightText">
                    {moment().format("Do MMM YYYY")}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="rightSide">
            {/* contents */}
            <div
              className={`contents ${
                theme === "light" ? "lightTheme" : "darkTheme"
              }`}
            >
              {/*Employee Details accordions */}
              <div
                className="addEmployeeAccordionContainer"
                style={{
                  backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                  borderColor: theme === "light" ? "#E6E6E6" : "#232324",
                }}
              >
                {/* header */}
                <div className="accordionHeader">
                  {/* edit button */}
                  <div className="editButton">
                    {/* title */}
                    <h5>Employee Details</h5>
                    {/* button */}
                    <button
                      type="button"
                      onClick={() => setEditData(!editData)}
                    >
                      <span
                        style={{
                          color: editData === false ? "#FF3E5B" : "#B5B5B6",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.9702 2.2146L6.17932 7.08766L6.06643 8.16228L7.08252 7.88857L11.678 3.21421C11.6854 3.20665 11.6932 3.19944 11.7013 3.19259C11.7888 3.11844 11.8715 2.96689 11.8944 2.77444C11.917 2.58541 11.8754 2.40924 11.7837 2.28931C11.6998 2.17965 11.5582 2.11103 11.3862 2.10118C11.2166 2.09147 11.0623 2.14214 10.9702 2.2146ZM11.4262 1.40232C11.7533 1.42105 12.1052 1.55738 12.3398 1.86412C12.5664 2.16058 12.6284 2.53127 12.5895 2.85727C12.5518 3.1742 12.4126 3.4999 12.1672 3.71513L7.515 8.44716C7.47133 8.49158 7.41659 8.52353 7.35645 8.53974L5.7561 8.97083C5.64472 9.00083 5.52571 8.97403 5.43794 8.89918C5.35018 8.82432 5.30493 8.71103 5.31698 8.59631L5.49593 6.89292C5.5042 6.81418 5.53893 6.74057 5.59443 6.68411L10.484 1.71058C10.4915 1.70303 10.4992 1.69581 10.5073 1.68896C10.7578 1.47668 11.1031 1.38383 11.4262 1.40232ZM1.40039 2.30294C1.40039 2.10965 1.55709 1.95294 1.75039 1.95294H6.89146C7.08476 1.95294 7.24146 2.10965 7.24146 2.30294C7.24146 2.49624 7.08476 2.65294 6.89146 2.65294H2.10039V11.9H11.1796V7.04781C11.1796 6.85451 11.3363 6.69781 11.5296 6.69781C11.7229 6.69781 11.8796 6.85451 11.8796 7.04781V12.25C11.8796 12.4433 11.7229 12.6 11.5296 12.6H1.75039C1.55709 12.6 1.40039 12.4433 1.40039 12.25V2.30294Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span
                        style={{
                          color: editData === false ? "#FF3E5B" : "#B5B5B6",
                        }}
                      >
                        Edit
                      </span>
                    </button>
                  </div>
                  {/* cancel icons */}
                  <span onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
                    {isAccordionOpen === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.2 12.0004C19.2 12.3318 18.9313 12.6004 18.6 12.6004L5.39995 12.6004C5.06858 12.6004 4.79995 12.3318 4.79995 12.0004C4.79995 11.669 5.06858 11.4004 5.39995 11.4004L18.6 11.4004C18.9313 11.4004 19.2 11.669 19.2 12.0004Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 3C12.3107 3 12.5625 3.25184 12.5625 3.5625V11.4375H20.4375C20.7482 11.4375 21 11.6893 21 12C21 12.3107 20.7482 12.5625 20.4375 12.5625H12.5625V20.4375C12.5625 20.7482 12.3107 21 12 21C11.6893 21 11.4375 20.7482 11.4375 20.4375L11.4375 12.5625H3.5625C3.25184 12.5625 3 12.3107 3 12C3 11.6893 3.25184 11.4375 3.5625 11.4375H11.4375L11.4375 3.5625C11.4375 3.25184 11.6893 3 12 3Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    )}
                  </span>
                </div>

                {isAccordionOpen && (
                  <div className="accordionContainerBody">
                    {/* divider */}
                    <div
                      className="divider"
                      style={{
                        backgroundColor: theme === "light" ? "#E6E6E6" : "",
                      }}
                    />
                    {/* contents */}
                    {/* grid design */}
                    <div className="grid">
                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          First Name
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="John"
                            inputTypes="text"
                            text={userNameSplit[0]}
                            name="employeeName"
                            // defaultValue={userNameSplit[0]}
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>{userNameSplit[0]}</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Last Name
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="Deo"
                            inputTypes="text"
                            text={userNameSplit[1]}
                            name="employeeLastName"
                            // defaultValue={userNameSplit[1]}
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>{userNameSplit[1]}</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Mother's Name
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="Sita"
                            inputTypes="text"
                            // text=""
                            name="bank_address"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>Mangala</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Date of Birth
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <>
                            <ConfigProvider>
                              <SingleDatePicker
                                // onChange={handleDatePickerChange}
                                // handleChange={(value) => handleChange("date_birth")(value)}
                                // errors={errors.date_birth}
                                // touched={touched.date_birth}
                                name="date_birth"
                                handleChange={handleDatePickerChange}
                              />
                              {/* error */}
                              {/* {touched.date_birth && errors.date_birth ? (
                          <p className="errors">{errors.date_birth}</p>
                        ) : null} */}
                            </ConfigProvider>

                            {/* <CalendarInput
                       // text={values[0]?.date_birth}
                       name="dateBirth"
                       placeholder="DD/MM/YYYY"
                       // errors={errors.date_birth}
                       // handleChange={(value) => handleChange("date_birth")(value)}
                       // touched={touched.date_birth}
                     /> */}
                          </>
                        ) : (
                          <span>09 Sep 1982</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Gender
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <Dropdown
                            items={genderItems}
                            selectedText=""
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="gender"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Male</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Aadhaar Card no.
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="Aadhaar no."
                            inputTypes="password"
                            // text={values.first_name}
                            name="aadharnumber"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>**** **** **29</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          PAN Card No.
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="password"
                            // text={values.first_name}
                            name="pancard"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>******2K</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Mobile Number
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="Enter 10 Digits Number"
                            inputTypes="password"
                            // text={values.first_name}
                            name="mobilenumber"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>+91-9987577635</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Email Address
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="example@gmail.com"
                            inputTypes="text"
                            // text={values.first_name}
                            name="emailAddress"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>kambleprashant59@gmail.com</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Monthly Salary
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="Monthyl Salary in INR"
                            inputTypes="text"
                            // text={values.first_name}
                            name="monthlysalary"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>₹29000</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Date of Joining
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <>
                            <ConfigProvider>
                              <SingleDatePicker
                                // onChange={handleDatePickerChange}
                                // handleChange={(value) => handleChange("date_birth")(value)}
                                // errors={errors.date_birth}
                                // touched={touched.date_birth}
                                name="date_birth"
                                handleChange={handleDatePickerChange}
                              />
                              {/* error */}
                              {/* {touched.date_birth && errors.date_birth ? (
                                <p className="errors">{errors.date_birth}</p>
                              ) : null} */}
                            </ConfigProvider>

                            {/* <CalendarInput
                             // text={values[0]?.date_birth}
                             name="dateBirth"
                             placeholder="DD/MM/YYYY"
                             // errors={errors.date_birth}
                             // handleChange={(value) => handleChange("date_birth")(value)}
                             // touched={touched.date_birth}
                           /> */}
                          </>
                        ) : (
                          <span>20/01/2024</span>
                        )}
                      </div>
                    </div>
                    {/* divider */}
                    <div
                      className="divider"
                      style={{
                        backgroundColor: theme === "light" ? "#E6E6E6" : "",
                      }}
                    />
                    {/* grid design */}
                    <div className="grid">
                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Address 1
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="text"
                            name="employeeName"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>
                            {employeeDrawerData?.employeeLocation
                              ? employeeDrawerData?.employeeLocation
                              : "--"}
                          </span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Address 2
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="text"
                            name="employeeName"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>
                            {employeeDrawerData?.employeeLocation
                              ? employeeDrawerData?.employeeLocation
                              : "--"}
                          </span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          PIN Code
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="tel"
                            name="pincode"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>401303</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          State
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <Dropdown
                            items={state}
                            selectedText=""
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="state"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Maharashtra</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          District
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <Dropdown
                            items={district}
                            selectedText=""
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="district"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Palghar</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          City
                          {editData && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData ? (
                          <Dropdown
                            items={city}
                            selectedText=""
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="city"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Virar</span>
                        )}
                      </div>
                    </div>

                    {editData && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          marginTop: 20,
                        }}
                      >
                        <button className="btns primaryBtn" type="button">
                          Save
                        </button>
                        <button className="btns outlineBtn" type="button">
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* bank details accordions */}
              <div
                className="addEmployeeAccordionContainer"
                style={{
                  backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                  borderColor: theme === "light" ? "#E6E6E6" : "#232324",
                }}
              >
                {/* header */}
                <div className="accordionHeader">
                  <div className="editButton">
                    {/* title */}
                    <h5>Bank Account Details</h5>
                    {/* button */}
                    <button
                      type="button"
                      onClick={() => setEditData2(!editData2)}
                    >
                      <span
                        style={{
                          color: editData2 === false ? "#FF3E5B" : "#B5B5B6",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.9702 2.2146L6.17932 7.08766L6.06643 8.16228L7.08252 7.88857L11.678 3.21421C11.6854 3.20665 11.6932 3.19944 11.7013 3.19259C11.7888 3.11844 11.8715 2.96689 11.8944 2.77444C11.917 2.58541 11.8754 2.40924 11.7837 2.28931C11.6998 2.17965 11.5582 2.11103 11.3862 2.10118C11.2166 2.09147 11.0623 2.14214 10.9702 2.2146ZM11.4262 1.40232C11.7533 1.42105 12.1052 1.55738 12.3398 1.86412C12.5664 2.16058 12.6284 2.53127 12.5895 2.85727C12.5518 3.1742 12.4126 3.4999 12.1672 3.71513L7.515 8.44716C7.47133 8.49158 7.41659 8.52353 7.35645 8.53974L5.7561 8.97083C5.64472 9.00083 5.52571 8.97403 5.43794 8.89918C5.35018 8.82432 5.30493 8.71103 5.31698 8.59631L5.49593 6.89292C5.5042 6.81418 5.53893 6.74057 5.59443 6.68411L10.484 1.71058C10.4915 1.70303 10.4992 1.69581 10.5073 1.68896C10.7578 1.47668 11.1031 1.38383 11.4262 1.40232ZM1.40039 2.30294C1.40039 2.10965 1.55709 1.95294 1.75039 1.95294H6.89146C7.08476 1.95294 7.24146 2.10965 7.24146 2.30294C7.24146 2.49624 7.08476 2.65294 6.89146 2.65294H2.10039V11.9H11.1796V7.04781C11.1796 6.85451 11.3363 6.69781 11.5296 6.69781C11.7229 6.69781 11.8796 6.85451 11.8796 7.04781V12.25C11.8796 12.4433 11.7229 12.6 11.5296 12.6H1.75039C1.55709 12.6 1.40039 12.4433 1.40039 12.25V2.30294Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span
                        style={{
                          color: editData2 === false ? "#FF3E5B" : "#B5B5B6",
                        }}
                      >
                        Edit
                      </span>
                    </button>
                  </div>
                  {/* cancel icons */}
                  <span
                    onClick={() => setIsAccordionOpen_2(!isAccordionOpen_2)}
                  >
                    {isAccordionOpen_2 === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.2 12.0004C19.2 12.3318 18.9313 12.6004 18.6 12.6004L5.39995 12.6004C5.06858 12.6004 4.79995 12.3318 4.79995 12.0004C4.79995 11.669 5.06858 11.4004 5.39995 11.4004L18.6 11.4004C18.9313 11.4004 19.2 11.669 19.2 12.0004Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 3C12.3107 3 12.5625 3.25184 12.5625 3.5625V11.4375H20.4375C20.7482 11.4375 21 11.6893 21 12C21 12.3107 20.7482 12.5625 20.4375 12.5625H12.5625V20.4375C12.5625 20.7482 12.3107 21 12 21C11.6893 21 11.4375 20.7482 11.4375 20.4375L11.4375 12.5625H3.5625C3.25184 12.5625 3 12.3107 3 12C3 11.6893 3.25184 11.4375 3.5625 11.4375H11.4375L11.4375 3.5625C11.4375 3.25184 11.6893 3 12 3Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    )}
                  </span>
                </div>

                {isAccordionOpen_2 && (
                  <div className="accordionContainerBody">
                    {/* divider */}
                    <div
                      className="divider"
                      style={{
                        backgroundColor: theme === "light" ? "#E6E6E6" : "",
                      }}
                    />
                    {/* contents */}
                    {/* grid design */}
                    <div className="grid">
                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>Bank Name</label>
                        {editData2 ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="text"
                            // text={values.first_name}
                            name="bank_name"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>PNB BANK</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>Bank branch</label>
                        {editData2 ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="text"
                            // text={values.first_name}
                            name="bank_branch"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>Biijnath Branch</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>Bank Address</label>
                        {editData2 ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="text"
                            // text={values.first_name}
                            name="bank_address"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>PNB Rajnagar Sansai Biijnath Dist Kandra</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Branch PIN code
                        </label>
                        {editData2 ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="text"
                            // text={values.first_name}
                            name="bank_pincode"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>88200</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Bank Account No.
                        </label>
                        {editData2 ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="text"
                            // text={values.first_name}
                            name="bank_account_number"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>257800010195192</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>IFSC code</label>
                        {editData2 ? (
                          <InputField
                            types="text"
                            placeholder="Enter"
                            inputTypes="text"
                            // text={values.first_name}
                            name="bank_ifsc_code"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>257800010195192</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>MICR No.</label>
                        {editData2 ? (
                          <InputField
                            types="text"
                            placeholder="Bank MICR code"
                            inputTypes="text"
                            // text={values.first_name}
                            name="bank_micr_code"
                            // errors={errors.first_name}
                            // touched={touched.first_name}
                            // handleChange={handleChange}
                          />
                        ) : (
                          <span>400229135</span>
                        )}
                      </div>
                    </div>

                    {editData2 && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          marginTop: 20,
                        }}
                      >
                        <button className="btns primaryBtn" type="button">
                          Save
                        </button>
                        <button className="btns outlineBtn" type="button">
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* role details */}
              <div
                className="addEmployeeAccordionContainer"
                style={{
                  backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                  borderColor: theme === "light" ? "#E6E6E6" : "#232324",
                }}
              >
                {/* header */}
                <div className="accordionHeader">
                  {/* edit button */}
                  <div className="editButton">
                    {/* title */}
                    <h5>Role Details</h5>
                    {/* button */}
                    <button
                      type="button"
                      onClick={() => setEditData3(!editData3)}
                    >
                      <span
                        style={{
                          color: editData3 === false ? "#FF3E5B" : "#B5B5B6",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.9702 2.2146L6.17932 7.08766L6.06643 8.16228L7.08252 7.88857L11.678 3.21421C11.6854 3.20665 11.6932 3.19944 11.7013 3.19259C11.7888 3.11844 11.8715 2.96689 11.8944 2.77444C11.917 2.58541 11.8754 2.40924 11.7837 2.28931C11.6998 2.17965 11.5582 2.11103 11.3862 2.10118C11.2166 2.09147 11.0623 2.14214 10.9702 2.2146ZM11.4262 1.40232C11.7533 1.42105 12.1052 1.55738 12.3398 1.86412C12.5664 2.16058 12.6284 2.53127 12.5895 2.85727C12.5518 3.1742 12.4126 3.4999 12.1672 3.71513L7.515 8.44716C7.47133 8.49158 7.41659 8.52353 7.35645 8.53974L5.7561 8.97083C5.64472 9.00083 5.52571 8.97403 5.43794 8.89918C5.35018 8.82432 5.30493 8.71103 5.31698 8.59631L5.49593 6.89292C5.5042 6.81418 5.53893 6.74057 5.59443 6.68411L10.484 1.71058C10.4915 1.70303 10.4992 1.69581 10.5073 1.68896C10.7578 1.47668 11.1031 1.38383 11.4262 1.40232ZM1.40039 2.30294C1.40039 2.10965 1.55709 1.95294 1.75039 1.95294H6.89146C7.08476 1.95294 7.24146 2.10965 7.24146 2.30294C7.24146 2.49624 7.08476 2.65294 6.89146 2.65294H2.10039V11.9H11.1796V7.04781C11.1796 6.85451 11.3363 6.69781 11.5296 6.69781C11.7229 6.69781 11.8796 6.85451 11.8796 7.04781V12.25C11.8796 12.4433 11.7229 12.6 11.5296 12.6H1.75039C1.55709 12.6 1.40039 12.4433 1.40039 12.25V2.30294Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span
                        style={{
                          color: editData3 === false ? "#FF3E5B" : "#B5B5B6",
                        }}
                      >
                        Edit
                      </span>
                    </button>
                  </div>
                  {/* cancel icons */}
                  <span
                    onClick={() => setIsAccordionOpen_3(!isAccordionOpen_3)}
                  >
                    {isAccordionOpen_3 === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.2 12.0004C19.2 12.3318 18.9313 12.6004 18.6 12.6004L5.39995 12.6004C5.06858 12.6004 4.79995 12.3318 4.79995 12.0004C4.79995 11.669 5.06858 11.4004 5.39995 11.4004L18.6 11.4004C18.9313 11.4004 19.2 11.669 19.2 12.0004Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 3C12.3107 3 12.5625 3.25184 12.5625 3.5625V11.4375H20.4375C20.7482 11.4375 21 11.6893 21 12C21 12.3107 20.7482 12.5625 20.4375 12.5625H12.5625V20.4375C12.5625 20.7482 12.3107 21 12 21C11.6893 21 11.4375 20.7482 11.4375 20.4375L11.4375 12.5625H3.5625C3.25184 12.5625 3 12.3107 3 12C3 11.6893 3.25184 11.4375 3.5625 11.4375H11.4375L11.4375 3.5625C11.4375 3.25184 11.6893 3 12 3Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    )}
                  </span>
                </div>

                {isAccordionOpen_3 && (
                  <div className="accordionContainerBody">
                    {/* divider */}
                    <div
                      className="divider"
                      style={{
                        backgroundColor: theme === "light" ? "#E6E6E6" : "",
                      }}
                    />
                    {/* contents */}
                    {/* grid design */}
                    <div className="grid">
                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Dealer Operations
                          {editData3 && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData3 ? (
                          <Dropdown
                            items={dealerOperations}
                            // selectedText={values.gender}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="dealer_operations"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Sales</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Department
                          {editData3 && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData3 ? (
                          <Dropdown
                            items={department}
                            // selectedText={values.gender}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="department"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Sales</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Role
                          {editData3 && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData3 ? (
                          <Dropdown
                            items={role}
                            // selectedText={values.gender}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="role"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Warranty Administrator</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Designation
                          {editData3 && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData3 ? (
                          <Dropdown
                            items={designation}
                            // selectedText={values.gender}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="designation"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Sales Executive</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Qualifications
                        </label>
                        {editData3 ? (
                          <Dropdown
                            items={qualifications}
                            // selectedText={values.gender}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="qualifications"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>BA</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>Skills</label>
                        {editData3 ? (
                          <Dropdown
                            items={skills}
                            // selectedText={values.gender}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="skills"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Marketing</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>Sub Skills</label>
                        {editData3 ? (
                          <Dropdown
                            items={skills}
                            // selectedText={values.gender}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="sub_skills"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Marketing</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Report Manager
                          {editData3 && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData3 ? (
                          <Dropdown
                            items={reportManager}
                            // selectedText={values.gender}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="reportManager"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Rahul Tripathi</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Employee Type
                          {editData3 && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData3 ? (
                          <Dropdown
                            items={employeeType}
                            // selectedText={values.gender}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="reportManager"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>Permanent</span>
                        )}
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Common Employee
                          {editData3 && <span style={{ color: "red" }}>*</span>}
                        </label>
                        {editData3 ? (
                          <Dropdown
                            items={[{ name: "Yes" }, { name: "No" }]}
                            selectedText={isCommonEmployee}
                            handleChange={setIsCommonEmployee}
                            // handleChange={(value) => handleChange("gender")(value)}
                            name="common_employee"
                            // touched={touched.gender}
                            // errors={errors.gender}
                          />
                        ) : (
                          <span>No</span>
                        )}
                      </div>

                      {/* Dealer Location */}
                      {isCommonEmployee === "Yes" && (
                        <div className="gridItems">
                          <label style={{ color: "#545454" }}>
                            Dealer Location
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          {
                            editData3 ?
                            <CheckBoxSelectDropdown
                              items={dealerLocation}
                              name="dealerLocation"
                            /> : <span>{isCommonEmployee}</span>
                          }
                        </div>
                      )}
                    </div>
                    {/* submit button */}
                    {editData3 && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          marginTop: 20,
                        }}
                      >
                        <button className="btns primaryBtn" type="button">
                          Save
                        </button>
                        <button className="btns outlineBtn" type="button">
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Work Experience details */}
              <div
                className="addEmployeeAccordionContainer"
                style={{
                  backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                  borderColor: theme === "light" ? "#E6E6E6" : "#232324",
                }}
              >
                {/* header */}
                <div className="accordionHeader">
                  <div className="addButtonTable">
                    {/* title */}
                    <h5>Work Experience details</h5>
                    {/* button */}
                    {/* <button type="button" onClick={() => setAddTableData4(true)}>
                <span
                  style={{
                    color: addTableData4 === false ? "#FF3E5B" : "#B5B5B6",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 1.75C7.18122 1.75 7.32813 1.89691 7.32813 2.07812V6.67188H11.9219C12.1031 6.67188 12.25 6.81878 12.25 7C12.25 7.18122 12.1031 7.32813 11.9219 7.32813H7.32813V11.9219C7.32813 12.1031 7.18122 12.25 7 12.25C6.81878 12.25 6.67188 12.1031 6.67188 11.9219L6.67188 7.32813H2.07812C1.89691 7.32813 1.75 7.18122 1.75 7C1.75 6.81878 1.89691 6.67188 2.07812 6.67188H6.67188L6.67188 2.07812C6.67188 1.89691 6.81878 1.75 7 1.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    color: addTableData === false ? "#FF3E5B" : "#B5B5B6",
                  }}
                >
                  Add
                </span>
              </button> */}
                  </div>
                  {/* cancel icons */}
                  <span
                    onClick={() => setIsAccordionOpen_4(!isAccordionOpen_4)}
                  >
                    {isAccordionOpen_4 === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.2 12.0004C19.2 12.3318 18.9313 12.6004 18.6 12.6004L5.39995 12.6004C5.06858 12.6004 4.79995 12.3318 4.79995 12.0004C4.79995 11.669 5.06858 11.4004 5.39995 11.4004L18.6 11.4004C18.9313 11.4004 19.2 11.669 19.2 12.0004Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 3C12.3107 3 12.5625 3.25184 12.5625 3.5625V11.4375H20.4375C20.7482 11.4375 21 11.6893 21 12C21 12.3107 20.7482 12.5625 20.4375 12.5625H12.5625V20.4375C12.5625 20.7482 12.3107 21 12 21C11.6893 21 11.4375 20.7482 11.4375 20.4375L11.4375 12.5625H3.5625C3.25184 12.5625 3 12.3107 3 12C3 11.6893 3.25184 11.4375 3.5625 11.4375H11.4375L11.4375 3.5625C11.4375 3.25184 11.6893 3 12 3Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    )}
                  </span>
                </div>

                {isAccordionOpen_4 && (
                  <div className="accordionContainerBody">
                    {/* divider */}
                    <div
                      className="divider"
                      style={{
                        backgroundColor: theme === "light" ? "#E6E6E6" : "",
                      }}
                    />
                    {/* contents */}

                    {/* table */}
                    <div
                      className={`table ${
                        theme === "light" ? "light" : "dark"
                      }`}
                      style={{
                        backgroundColor: theme === "light" ? "#fff" : "#0B0B0C",
                        border: `1px solid ${
                          theme === "light" ? "#e6e6e6" : "#232324"
                        }`,
                        borderRadius: 4,
                      }}
                    >
                      <table>
                        <thead
                          style={{
                            backgroundColor:
                              theme === "light" ? "#E6E6E6" : "#1C1C1C",
                          }}
                        >
                          <tr>
                            <th style={{ borderTopLeftRadius: 4 }}>#</th>
                            <th>Organisation Name</th>
                            <th>Dealer For</th>
                            <th>Location</th>
                            <th>Emp. Role</th>
                            <th>Capability Level</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th
                              className={`stickyTableData ${
                                theme === "light" ? "lightHover" : "darkHover"
                              }`}
                              style={{
                                backgroundColor:
                                  theme === "light" ? "#E6E6E6" : "#1C1C1C",
                                borderTopRightRadius: 4,
                              }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {tbody?.map((ele, index) => {
                            return (
                              <tr key={index}>
                                <td
                                  style={{
                                    borderColor:
                                      theme === "light" ? "#E6E6E6" : "#232324",
                                  }}
                                >
                                  {index + 1}
                                </td>
                                <td
                                  style={{
                                    borderColor:
                                      theme === "light" ? "#E6E6E6" : "#232324",
                                  }}
                                >
                                  {ele.organisationname
                                    ? ele.organisationname
                                    : "-"}
                                </td>
                                <td
                                  style={{
                                    borderColor:
                                      theme === "light" ? "#E6E6E6" : "#232324",
                                  }}
                                >
                                  {ele.dealer ? ele.dealer : "-"}
                                </td>
                                <td
                                  style={{
                                    borderColor:
                                      theme === "light" ? "#E6E6E6" : "#232324",
                                  }}
                                >
                                  {ele.location ? ele.location : "-"}
                                </td>
                                <td
                                  style={{
                                    borderColor:
                                      theme === "light" ? "#E6E6E6" : "#232324",
                                  }}
                                >
                                  {ele.emp_role ? ele.emp_role : "-"}
                                </td>
                                <td
                                  style={{
                                    borderColor:
                                      theme === "light" ? "#E6E6E6" : "#232324",
                                  }}
                                >
                                  {ele.capabilityLevel
                                    ? ele.capabilityLevel
                                    : "-"}
                                </td>
                                <td
                                  style={{
                                    borderColor:
                                      theme === "light" ? "#E6E6E6" : "#232324",
                                  }}
                                >
                                  {ele.fromDate ? ele.fromDate : "-"}
                                </td>
                                <td
                                  style={{
                                    borderColor:
                                      theme === "light" ? "#E6E6E6" : "#232324",
                                  }}
                                >
                                  {ele.toDate ? ele.toDate : "-"}
                                </td>
                                <td
                                  style={{
                                    borderColor:
                                      theme === "light" ? "#E6E6E6" : "#232324",
                                  }}
                                  className={`stickyTableData ${
                                    theme === "light"
                                      ? "lightHover"
                                      : "darkHover"
                                  }`}
                                >
                                  <div className="actionBtns">
                                    {/* edit */}
                                    <button
                                      onClick={() =>
                                        setEditWorkExperienceDrawer(
                                          !editWorkExperienceDrawer
                                        )
                                      }
                                    >
                                      <span>
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
                                            d="M15.6711 3.16368L8.82705 10.1252L8.66577 11.6604L10.1173 11.2694L16.6823 4.59169C16.6929 4.5809 16.704 4.57059 16.7156 4.56081C16.8405 4.45489 16.9587 4.23838 16.9915 3.96346C17.0237 3.6934 16.9643 3.44173 16.8333 3.2704C16.7135 3.11376 16.5112 3.01572 16.2654 3.00165C16.0231 2.98778 15.8027 3.06016 15.6711 3.16368ZM16.3226 2.00328C16.7899 2.03003 17.2926 2.22479 17.6277 2.66299C17.9515 3.08651 18.04 3.61606 17.9845 4.08179C17.9305 4.53454 17.7317 4.99982 17.3811 5.30729L10.7352 12.0673C10.6728 12.1308 10.5946 12.1764 10.5087 12.1996L8.22244 12.8154C8.06333 12.8583 7.89331 12.82 7.76793 12.7131C7.64255 12.6061 7.57791 12.4443 7.59513 12.2804L7.85077 9.84699C7.86259 9.7345 7.91219 9.62935 7.99149 9.5487L14.9766 2.44365C14.9872 2.43286 14.9983 2.42256 15.0099 2.41277C15.3677 2.1095 15.861 1.97687 16.3226 2.00328ZM2 3.28989C2 3.01374 2.22386 2.78989 2.5 2.78989H9.84439C10.1205 2.78989 10.3444 3.01374 10.3444 3.28989C10.3444 3.56603 10.1205 3.78989 9.84439 3.78989H3V17H15.9703V10.0683C15.9703 9.79212 16.1942 9.56826 16.4703 9.56826C16.7464 9.56826 16.9703 9.79212 16.9703 10.0683V17.5C16.9703 17.7761 16.7464 18 16.4703 18H2.5C2.22386 18 2 17.7761 2 17.5V3.28989Z"
                                            fill="#FF3E5B"
                                          />
                                        </svg>
                                      </span>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* footer side */}
            <div
              className="footerSide"
              style={{
                boxShadow:
                  theme === "light"
                    ? "1px 0px 0px 1px rgba(0, 0, 0, 0.15)"
                    : "0px -1px 1px 0px rgba(255, 255, 255, 0.15)",
                backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
                marginLeft: theme === "light" ? "1px" : "0px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button
                  type="button"
                  className="btns primaryBtn"
                  // onClick={() => setDrawerType("edit")}
                >
                  Transfer
                </button>

                <button
                  type="button"
                  className="btns primaryBtn"
                  // onClick={() => setDrawerType("edit")}
                >
                  Resign
                </button>
              </div>

              {/* right side button */}
              {/* <div
                className="rightSideBtn"
              >

              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Edit Work Experience Drawer */}
      {/* {editWorkExperienceDrawer && (
        <EditWorkExperience
          editWorkExperienceDrawer={editWorkExperienceDrawer}
          setEditWorkExperienceDrawer={setEditWorkExperienceDrawer}
        />
      )} */}
    </>
  );
}

export default ViewTableData;
