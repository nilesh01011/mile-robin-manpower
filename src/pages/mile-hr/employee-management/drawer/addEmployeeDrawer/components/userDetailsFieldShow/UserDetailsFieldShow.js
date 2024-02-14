import React, { useState } from "react";
import "./styles.scss";
import CalendarInput from "../../../../../../../components/calendarInput";
import Dropdown from "../../../../../../../components/dropdown/Dropdown";
import { useSelector } from "react-redux";
import InputField from "../../../../../../../components/inputField/InputField";

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
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isAccordionOpen_2, setIsAccordionOpen_2] = useState(false);
  const [isAccordionOpen_3, setIsAccordionOpen_3] = useState(false);
  const [isAccordionOpen_4, setIsAccordionOpen_4] = useState(false);

  const genderItems = [
    {
      name: "male",
    },
    {
      name: "female",
    },
    {
      name: "other",
    },
  ];

  const state = [
    {
      name: "Maharashtra",
    },
    {
      name: "Gujarat",
    },
    {
      name: "Pune",
    },
    {
      name: "Kolkata",
    },
  ];

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

  const [addTableData, setAddTableData] = useState(false);

  const industry = [
    {
      name: "Auto OEM",
    },
    {
      name: "Auto OEM 2",
    },
  ];

  const dealerName = [
    {
      name: "Option 1",
    },
    {
      name: "Option 2",
    },
    {
      name: "Option 3",
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
  return (
    <>
      <div className="addEmployeeDetails">
        {/* Employee Details accordions */}
        <div
          className="addEmployeeAccordionContainer"
          style={{
            backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
            borderColor: theme === "light" ? "#E6E6E6" : "#232324",
          }}
        >
          {/* header */}
          <div className="accordionHeader">
            {/* title */}
            <h5>Employee Details</h5>
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
                    First Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter first name"
                    inputTypes="text"
                    // text={values.first_name}
                    name="first_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
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
                    // text={values.first_name}
                    name="last_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
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
                    // text={values.first_name}
                    name="mother_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Date of Birth<span style={{ color: "red" }}>*</span>
                  </label>
                  <CalendarInput
                    // text={values.date_birth}
                    name="dateBirth"
                    // errors={errors.date_birth}
                    // handleChange={(value) => handleChange("date_birth")(value)}
                    // touched={touched.date_birth}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Gender<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={genderItems}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="gender"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Aadhaar Card no.<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter Aadhaar Card no."
                    inputTypes="text"
                    // text={values.first_name}
                    name="mother_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Pan Card no.<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter Pan Card no."
                    inputTypes="text"
                    // text={values.first_name}
                    name="mother_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Mobile Number<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter mobile number"
                    inputTypes="text"
                    // text={values.first_name}
                    name="mother_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Email Address<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter email address"
                    inputTypes="text"
                    // text={values.first_name}
                    name="email_address"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Monthlt Salary<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter monthly salary"
                    inputTypes="text"
                    // text={values.first_name}
                    name="monthly_salary"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Date of Joining<span style={{ color: "red" }}>*</span>
                  </label>
                  <CalendarInput
                    // text={values.date_birth}
                    name="dateBirth"
                    // errors={errors.date_birth}
                    // handleChange={(value) => handleChange("date_birth")(value)}
                    // touched={touched.date_birth}
                  />
                </div>
              </div>
              {/* divider */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#E6E6E6" : "",
                }}
              />
              {/* flex design */}
              <div className="flex">
                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Address 1<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter address 1"
                    inputTypes="text"
                    // text={values.first_name}
                    name="address1"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Address 2<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter address 2"
                    inputTypes="text"
                    // text={values.first_name}
                    name="address2"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>
              </div>

              {/* grid */}
              <div className="grid" style={{ marginTop: 20 }}>
                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    PIN Code<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter PIN Code"
                    inputTypes="text"
                    // text={values.first_name}
                    name="pinCode"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    State<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={state}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="state"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    District<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={state}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="state"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    City<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={state}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="state"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>
              </div>

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
            {/* title */}
            <h5>Bank Account Details</h5>
            {/* cancel icons */}
            <span onClick={() => setIsAccordionOpen_2(!isAccordionOpen_2)}>
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
                  <label style={{ color: "#545454" }}>bank Name</label>
                  <InputField
                    types="text"
                    placeholder="Enter bank name"
                    inputTypes="text"
                    // text={values.first_name}
                    name="bank_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>bank branch</label>
                  <InputField
                    types="text"
                    placeholder="Enter bank branch name"
                    inputTypes="text"
                    // text={values.first_name}
                    name="bank_branch"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>Bank Address</label>
                  <InputField
                    types="text"
                    placeholder="Enter bank address name"
                    inputTypes="text"
                    // text={values.first_name}
                    name="bank_address"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>Branch PIN code</label>
                  <InputField
                    types="text"
                    placeholder="Enter bank pin code"
                    inputTypes="text"
                    // text={values.first_name}
                    name="bank_pincode"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>Bank Account No.</label>
                  <InputField
                    types="text"
                    placeholder="Enter bank account number"
                    inputTypes="text"
                    // text={values.first_name}
                    name="bank_account_number"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>IFSC code</label>
                  <InputField
                    types="text"
                    placeholder="Enter IFSC code"
                    inputTypes="text"
                    // text={values.first_name}
                    name="bank_ifsc_code"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>MICR No.</label>
                  <InputField
                    types="text"
                    placeholder="Enter MICR code"
                    inputTypes="text"
                    // text={values.first_name}
                    name="bank_micr_code"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>
              </div>

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
            {/* title */}
            <h5>role Details</h5>
            {/* cancel icons */}
            <span onClick={() => setIsAccordionOpen_3(!isAccordionOpen_3)}>
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
                    Dealer Operations<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={dealerOperations}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="dealer_operations"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    department<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={department}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="department"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    role<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={role}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="department"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    designation<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={designation}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="designation"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>Qualifications</label>
                  <Dropdown
                    items={qualifications}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="qualifications"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>skills</label>
                  <Dropdown
                    items={skills}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="skills"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>sub skills</label>
                  <Dropdown
                    items={skills}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="sub_skills"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    report Manager<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={reportManager}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="reportManager"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Employee Type<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={employeeType}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="reportManager"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Common Employee<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={[{ name: "Yes" }, { name: "No" }]}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="common_employee"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Dealer Location<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={dealerLocation}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="dealerLocation"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>
              </div>

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
              <button type="button" onClick={() => setAddTableData(true)}>
                <span
                  style={{
                    color: addTableData === false ? "#FF3E5B" : "#B5B5B6",
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
              </button>
            </div>
            {/* cancel icons */}
            <span onClick={() => setIsAccordionOpen_4(!isAccordionOpen_4)}>
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
              {/* grid design */}
              <div className="grid">
                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Industry<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={industry}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="dealer_operations"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>
              </div>

              <div className="grid" style={{ margin: "20px 0" }}>
                <div className="gridItems">
                  <label style={{ color: "#545454" }}>role</label>
                  <Dropdown
                    items={role}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="role"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Mahindra Dealer Name
                  </label>
                  <Dropdown
                    items={dealerName}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="role"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>
                    Dealer For (Non Mahindra OEM)
                  </label>
                  <Dropdown
                    items={dealerName}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="role"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>From Date</label>
                  <CalendarInput
                    // text={values.date_birth}
                    name="fromDate"
                    // errors={errors.date_birth}
                    // handleChange={(value) => handleChange("date_birth")(value)}
                    // touched={touched.date_birth}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: "#545454" }}>To Date</label>
                  <CalendarInput
                    // text={values.date_birth}
                    name="toDate"
                    // errors={errors.date_birth}
                    // handleChange={(value) => handleChange("date_birth")(value)}
                    // touched={touched.date_birth}
                  />
                </div>
              </div>

              {/* this content footer */}
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
                <button
                  className="btns outlineBtn"
                  type="button"
                  onClick={() => setAddTableData(false)}
                >
                  Cancel
                </button>
              </div>
              {/* divider */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#E6E6E6" : "",
                }}
              />

              {/* table */}
              <div
                className="table"
                style={{ backgroundColor: theme === "light" ? "#fff" : "" }}
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
                      <th style={{ borderTopRightRadius: 4 }}>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {tbody?.map((ele, index) => {
                      return (
                        <tr key={index}>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#E6E6E6" : "#E6E6E6",
                            }}
                          >
                            {index + 1}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#E6E6E6" : "#E6E6E6",
                            }}
                          >
                            {ele.organisationname ? ele.organisationname : "-"}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#E6E6E6" : "#E6E6E6",
                            }}
                          >
                            {ele.dealer ? ele.dealer : "-"}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#E6E6E6" : "#E6E6E6",
                            }}
                          >
                            {ele.location ? ele.location : "-"}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#E6E6E6" : "#E6E6E6",
                            }}
                          >
                            {ele.emp_role ? ele.emp_role : "-"}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#E6E6E6" : "#E6E6E6",
                            }}
                          >
                            {ele.capabilityLevel ? ele.capabilityLevel : "-"}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#E6E6E6" : "#E6E6E6",
                            }}
                          >
                            {ele.fromDate ? ele.fromDate : "-"}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#E6E6E6" : "#E6E6E6",
                            }}
                          >
                            {ele.toDate ? ele.toDate : "-"}
                          </td>
                          <td
                            style={{
                              borderColor:
                                theme === "light" ? "#E6E6E6" : "#E6E6E6",
                            }}
                          >
                            <div className="actionBtns">
                              {/* edit */}
                              <button>
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
                              {/* cancel */}
                              <button>
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
                                      d="M3.45541 3.45505C3.61813 3.29233 3.88195 3.29233 4.04467 3.45505L10 9.41042L15.9554 3.45505C16.1181 3.29233 16.3819 3.29233 16.5447 3.45505C16.7074 3.61777 16.7074 3.88158 16.5447 4.0443L10.5893 9.99967L16.5447 15.955C16.7074 16.1178 16.7074 16.3816 16.5447 16.5443C16.3819 16.707 16.1181 16.707 15.9554 16.5443L10 10.5889L4.04467 16.5443C3.88195 16.707 3.61813 16.707 3.45541 16.5443C3.29269 16.3816 3.29269 16.1178 3.45541 15.955L9.41078 9.99967L3.45541 4.0443C3.29269 3.88158 3.29269 3.61777 3.45541 3.45505Z"
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
