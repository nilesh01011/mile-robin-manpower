import React, { useState } from "react";
import "./styles.scss";
import Accordion from "./components/accordion/Accordion";
import InputField from "../../../../../../components/inputField/InputField";
import CalendarInput from "../../../../../../components/calendarInput";
import Dropdown from "../../../../../../components/dropdown/Dropdown";
import { useSelector } from "react-redux";

function AddEmployeeDetails() {
  const theme = useSelector((state) => state.theme);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isAccordionOpen_2, setIsAccordionOpen_2] = useState(false);

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

  return (
    <div className="addEmployeeDetails">
      {/* <Accordion
        title="Employee Details"
        firstDesign="grid"
        secondDesign="flex"
        thirdDesign="grid"
        dropdownItems={genderItems}
      />
      <Accordion title="Bank Account Details" />
      <Accordion title="Role Details" />
      <Accordion title="Work Experience details" addButton={true} /> */}

{/* first accordions */}
      <div
        className="accordionContainer"
        style={{
          backgroundColor: theme === "light" ? "#F2F2F2" : "",
          borderColor: theme === "light" ? "#E6E6E6" : "",
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
              style={{ backgroundColor: theme === "light" ? "#E6E6E6" : "" }}
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
              style={{ backgroundColor: theme === "light" ? "#E6E6E6" : "" }}
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

      {/* second accordions */}
      <div
        className="accordionContainer"
        style={{
          backgroundColor: theme === "light" ? "#F2F2F2" : "",
          borderColor: theme === "light" ? "#E6E6E6" : "",
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
              style={{ backgroundColor: theme === "light" ? "#E6E6E6" : "" }}
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
              style={{ backgroundColor: theme === "light" ? "#E6E6E6" : "" }}
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
        >
          Cancel
        </button>
        {/* right btns */}
        <button className="btns primaryBtn" type="submit" aria-label="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddEmployeeDetails;
