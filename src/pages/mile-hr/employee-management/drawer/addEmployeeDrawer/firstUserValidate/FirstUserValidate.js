import React from "react";
import { useSelector } from "react-redux";
import InputField from "../../../../../../components/inputField/InputField";
import CalendarInput from "../../../../../../components/calendarInput";
import Dropdown from "../../../../../../components/dropdown/Dropdown";

function FirstUserValidate({ values, touched, errors, handleChange,handleDrawerClosed }) {
  const theme = useSelector((state) => state.theme);

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

  const businessNameItems = [
    {
      name: "AD",
    },
    {
      name: "LMM",
    },
    {
      name: "AD 2",
    },
    {
      name: "AD 3",
    },
  ];
  
  return (
    <>
      {/* grid container */}
      <div className="userExistsCheckEmployeeContainer">
        <div
          className="actionEmployeeContents"
          style={{
            backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
          }}
        >
          {/* first name */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              First Name<span style={{ color: "red" }}>*</span>
            </label>
            <InputField
              types="text"
              placeholder="Enter first name"
              inputTypes="text"
              text={values.first_name}
              name="first_name"
              errors={errors.first_name}
              touched={touched.first_name}
              handleChange={handleChange}
            />
          </div>

          {/* last name */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Last Name<span style={{ color: "red" }}>*</span>
            </label>
            <InputField
              types="text"
              placeholder="Enter last name"
              inputTypes="text"
              text={values.last_name}
              name="last_name"
              errors={errors.last_name}
              touched={touched.last_name}
              handleChange={handleChange}
            />
          </div>

          {/* mother name */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Mother's Name<span style={{ color: "red" }}>*</span>
            </label>
            <InputField
              types="text"
              placeholder="Enter mother's name"
              inputTypes="text"
              text={values.mother_name}
              name="mother_name"
              errors={errors.mother_name}
              touched={touched.mother_name}
              handleChange={handleChange}
            />
          </div>

          {/* date */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Date of Birth<span style={{ color: "red" }}>*</span>
            </label>
            <CalendarInput
              text={values.date_birth}
              name="dateBirth"
              errors={errors.date_birth}
              handleChange={(value) => handleChange("date_birth")(value)}
              touched={touched.date_birth}
            />
          </div>

          {/* dropdown */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Gender<span style={{ color: "red" }}>*</span>
            </label>
            <Dropdown
              items={genderItems}
              selectedText={values.gender}
              handleChange={(value) => handleChange("gender")(value)}
              name="gender"
              touched={touched.gender}
              errors={errors.gender}
            />
          </div>

          <div className="gridItems">
            <label style={{ color: "#545454" }}>
              Business Name<span style={{ color: "red" }}>*</span>
            </label>
            <Dropdown
              items={businessNameItems}
              selectedText={values.businessName}
              handleChange={(value) => handleChange("businessName")(value)}
              name="businessName"
              touched={touched.businessName}
              errors={errors.businessName}
              // handleChange={handleChange}
            />
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
        <button className="btns primaryBtn" type="submit" aria-label="submit">
          Validate
        </button>
      </div>
    </>
  );
}

export default FirstUserValidate;
