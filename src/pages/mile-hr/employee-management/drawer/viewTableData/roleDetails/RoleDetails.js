import React, { useState } from "react";
import Dropdown from "../../../../../../components/dropdown/Dropdown";
import { useSelector } from "react-redux";
import CheckBoxSelectDropdown from "../../../../../../components/checkBoxSelectDropdown/CheckBoxSelectDropdown";

function RoleDetails({ employeeDrawerData }) {
  const theme = useSelector((state) => state.theme);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [editData, setEditData] = useState(false);
  // role
  const dealerOperations = [
    {
      name: "sales",
    },
    {
      name: "service",
    },
    {
      name: "common",
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

  // role based
  const [isCommonEmployee, setIsCommonEmployee] = useState("Yes");
  return (
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
          <button type="button" onClick={() => setEditData(!editData)}>
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
                Dealer Operations
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
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
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
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
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
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
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
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
              <label style={{ color: "#545454" }}>Qualifications</label>
              {editData ? (
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
              <label style={{ color: "#545454" }}>
                Report Manager
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
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
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
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
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
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
                {editData ? (
                  <CheckBoxSelectDropdown
                    items={dealerLocation}
                    name="dealerLocation"
                  />
                ) : (
                  <span>{isCommonEmployee}</span>
                )}
              </div>
            )}
          </div>
          {/* submit button */}
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
  );
}

export default RoleDetails;
