import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import InputField from "../../../../../../../../components/inputField/InputField";
import CalendarInput from "../../../../../../../../components/calendarInput";
import Dropdown from "../../../../../../../../components/dropdown/Dropdown";

function Accordion({
  title,
  firstDesign,
  secondDesign,
  thirdDesign,
  dropdownItems,
}) {
  const theme = useSelector((state) => state.theme);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
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
        <h5>{title}</h5>
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
          {/* firstDesign */}
          <div className={firstDesign}>
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
                items={dropdownItems}
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
