import React, { useState } from "react";
import { useSelector } from "react-redux";
import Dropdown from "../../../../../../../../components/dropdown/Dropdown";

function RoleDetails({ values }) {
  const theme = useSelector((state) => state.theme);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // dropdown lists
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
        {/* title */}
        <h5>role Details</h5>
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
  );
}

export default RoleDetails;
