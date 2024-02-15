import React, { useState } from "react";
import { useSelector } from "react-redux";
import Overlay from "../../../../../components/overlay/Overlay";
import "./styles.scss";
import moment from "moment";
import InputField from "../../../../../components/inputField/InputField";
import Dropdown from "../../../../../components/dropdown/Dropdown";
import CalendarInput from "../../../../../components/calendarInput";

function ViewTableData({
  viewTableDataDrawer,
  setViewTableDataDrawer,
  // Emplo data state
  setEmployeeDrawerData,
  employeeDrawerData,
}) {
  console.log("Emplo data:", employeeDrawerData);
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
          <h3>View Customer Details</h3>
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
                  {/* edit button */}
                  <div className="editButton">
                    {/* title */}
                    <h5>Employee Details</h5>
                    {/* button */}
                    <button type="button" onClick={() => setEditData(true)}>
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
                          First Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <InputField
                          types="text"
                          placeholder="Enter First name"
                          inputTypes="text"
                          text={userNameSplit[0]}
                          name="employeeName"
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
                          text={userNameSplit[1]}
                          name="employeeLastName"
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
                          placeholder="Enter mother name"
                          inputTypes="text"
                          // text=""
                          name="bank_address"
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
                          // text={values[0]?.date_birth}
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
                          selectedText=""
                          // handleChange={(value) => handleChange("gender")(value)}
                          name="gender"
                          // touched={touched.gender}
                          // errors={errors.gender}
                        />
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Aadhaar Card no.
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <InputField
                          types="text"
                          placeholder="Adhaar Card no."
                          inputTypes="password"
                          // text={values.first_name}
                          name="aadharnumber"
                          // errors={errors.first_name}
                          // touched={touched.first_name}
                          // handleChange={handleChange}
                        />
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          PAN Card No.<span style={{ color: "red" }}>*</span>
                        </label>
                        <InputField
                          types="text"
                          placeholder="Adhaar Card no."
                          inputTypes="password"
                          // text={values.first_name}
                          name="pancard"
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
                          placeholder="Adhaar Card no."
                          inputTypes="password"
                          // text={values.first_name}
                          name="mobilenumber"
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
                          placeholder="example@gmail.com"
                          inputTypes="text"
                          // text={values.first_name}
                          name="emailAddress"
                          // errors={errors.first_name}
                          // touched={touched.first_name}
                          // handleChange={handleChange}
                        />
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Monthly Salary<span style={{ color: "red" }}>*</span>
                        </label>
                        <InputField
                          types="text"
                          placeholder="Monthyl Salary in INR"
                          inputTypes="text"
                          // text={values.first_name}
                          name="emailAddress"
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
                          // text={values[0]?.date_birth}
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
                    {/* grid design */}
                    <div className="grid">
                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Address 1<span style={{ color: "red" }}>*</span>
                        </label>
                        <InputField
                          types="text"
                          placeholder="Address 1"
                          inputTypes="text"
                          name="employeeName"
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
                          placeholder="Address 2"
                          inputTypes="text"
                          name="employeeName"
                          // errors={errors.first_name}
                          // touched={touched.first_name}
                          // handleChange={handleChange}
                        />
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          PIN Code<span style={{ color: "red" }}>*</span>
                        </label>
                        <InputField
                          types="text"
                          placeholder="Enter PIN Code"
                          inputTypes="tel"
                          name="pincode"
                          // errors={errors.first_name}
                          // touched={touched.first_name}
                          // handleChange={handleChange}
                        />
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          City<span style={{ color: "red" }}>*</span>
                        </label>
                        <Dropdown
                          items={city}
                          selectedText=""
                          // handleChange={(value) => handleChange("gender")(value)}
                          name="city"
                          // touched={touched.gender}
                          // errors={errors.gender}
                        />
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          State<span style={{ color: "red" }}>*</span>
                        </label>
                        <Dropdown
                          items={state}
                          selectedText=""
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
                          items={district}
                          selectedText=""
                          // handleChange={(value) => handleChange("gender")(value)}
                          name="district"
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
                  <div className="editButton">
                    {/* title */}
                    <h5>Bank Account Details</h5>
                    {/* button */}
                    <button type="button" onClick={() => setEditData2(true)}>
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
                          color: editData === false ? "#FF3E5B" : "#B5B5B6",
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
                        <InputField
                          types="text"
                          placeholder="Bank name"
                          inputTypes="text"
                          // text={values.first_name}
                          name="bank_name"
                          // errors={errors.first_name}
                          // touched={touched.first_name}
                          // handleChange={handleChange}
                        />
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>Bank branch</label>
                        <InputField
                          types="text"
                          placeholder="Bank branch name"
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
                          placeholder="Bank address name"
                          inputTypes="text"
                          // text={values.first_name}
                          name="bank_address"
                          // errors={errors.first_name}
                          // touched={touched.first_name}
                          // handleChange={handleChange}
                        />
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Branch PIN code
                        </label>
                        <InputField
                          types="text"
                          placeholder="Bank pin code"
                          inputTypes="text"
                          // text={values.first_name}
                          name="bank_pincode"
                          // errors={errors.first_name}
                          // touched={touched.first_name}
                          // handleChange={handleChange}
                        />
                      </div>

                      <div className="gridItems">
                        <label style={{ color: "#545454" }}>
                          Bank Account No.
                        </label>
                        <InputField
                          types="text"
                          placeholder="Bank Account no."
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
                          placeholder="IFSC code"
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
                          placeholder="Bank MICR code"
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
                  {/* edit button */}
                  <div className="editButton">
                    {/* title */}
                    <h5>Role Details</h5>
                    {/* button */}
                    <button type="button" onClick={() => setEditData(true)}>
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
                          <span style={{ color: "red" }}>*</span>
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
                          Department<span style={{ color: "red" }}>*</span>
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
                          Role<span style={{ color: "red" }}>*</span>
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
                          Designation<span style={{ color: "red" }}>*</span>
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
                        <label style={{ color: "#545454" }}>
                          Qualifications
                        </label>
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
                        <label style={{ color: "#545454" }}>Skills</label>
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
                        <label style={{ color: "#545454" }}>Sub Skills</label>
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
                          Report Manager<span style={{ color: "red" }}>*</span>
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
    </>
  );
}

export default ViewTableData;
