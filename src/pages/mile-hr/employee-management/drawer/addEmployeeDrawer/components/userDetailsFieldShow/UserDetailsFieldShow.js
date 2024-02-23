import React, { useState } from "react";
import "./styles.scss";
import Dropdown from "../../../../../../../components/dropdown/Dropdown";
import { useSelector } from "react-redux";
import InputField from "../../../../../../../components/inputField/InputField";
import { ConfigProvider } from "antd";
import SingleDatePicker from "../../../../../../../components/date/singleDatePicker/SingleDatePicker";
import axios from "axios";

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
      name: "Non Auto OEM",
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

  const handleDatePickerChange = (dateString) => {
    // handleChange
    // handleChange("date_birth")(dateString);
    // console.log(dateString);
  };

  // const [firstName, setFirstName] = useState("");

  // PIN Code
  const [pincode, setPincode] = useState("");

  const [state, setState] = useState([]);

  const [city, setCity] = useState([]);

  const [district, setDistrict] = useState([]);

  const [pinCodeError, setPinCodeError] = useState("");

  const accessToken =
  "eyJraWQiOiJMVndUWU1OOTg4eUZwbDkyMGxoVzIxQ2NYYWF6ckk0aE1ZYndpSDV5d1Q4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MDAzOGU0My05NzhjLTQ2YWUtYmRiNy0wNTBlMDcxMDVlOTAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX0VKbWNiS1pyaiIsImNsaWVudF9pZCI6IjU4bTZxOGtucDE5Y2M5NGplZ2x1bnA0bXQ4Iiwib3JpZ2luX2p0aSI6IjY4NzE5ODljLTcyMTgtNGEyOC1iMDdiLTM3ODZjMThlYjcwYyIsImV2ZW50X2lkIjoiMzZlNTdmNzMtZWQxOS00MWJlLWFkZGUtYmUyYjU1OWQ4YTcxIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTcwODY2MDU4OCwiZXhwIjoxNzA4NjY0MTg4LCJpYXQiOjE3MDg2NjA1ODgsImp0aSI6IjczYmU3ZjBmLTAxNzItNDFhYy04NzFiLTNhZjg5MGFlM2Y5NCIsInVzZXJuYW1lIjoicmVlbmEifQ.lhcIsuRyN50ZJsqAIZ4mT_fTGVJObIg8cVlkLRg3QIUjcuRA9ZrMWp7ba9aGHYSVEOVbDfnsgT_YVQfQMAJIRTNCIMHF3to_mlIImGkbWCywRpCOr9ItBYhB94pI7Vd8p6eWgTGkAnw6eoK9P6vWn18ET-FFltfByPctQ-AB0Yie2P7XS_49w5pePpAl76RuDa4cpqgqfLrhUftYKWBYCbvk-GqUJ_eiwmeYSBaXdSTsWJ0bU9qdEzlpNi-IpXls0Gn48RRidFgJZEEpIxhu6Du5W4fuKLoT4Z-Ny5mihSYY3R6GZbTkm5U_Y8QUlOa-Tb2jgDQuyLyJR2bh0XplUw";
const authorization =
  "eyJraWQiOiJkR1lMQWhzS1JNK092SlwvMlRKRkdTYVJxcFVuN3RsZ0R2SkpTVkhhT3REND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0MDAzOGU0My05NzhjLTQ2YWUtYmRiNy0wNTBlMDcxMDVlOTAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9FSm1jYktacmoiLCJjb2duaXRvOnVzZXJuYW1lIjoicmVlbmEiLCJvcmlnaW5fanRpIjoiNjg3MTk4OWMtNzIxOC00YTI4LWIwN2ItMzc4NmMxOGViNzBjIiwiYXVkIjoiNThtNnE4a25wMTljYzk0amVnbHVucDRtdDgiLCJldmVudF9pZCI6IjM2ZTU3ZjczLWVkMTktNDFiZS1hZGRlLWJlMmI1NTlkOGE3MSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzA4NjYwNTg4LCJleHAiOjE3MDg2NjQxODgsImlhdCI6MTcwODY2MDU4OCwianRpIjoiMjcwMGI1NzAtODkyYy00MGFkLThiN2ItMDVjZDFhYmFkMDg0IiwiZW1haWwiOiJhbmtpdGF5OTEyODhAZ21haWwuY29tIn0.GhJkeR3AzZLcwRtwAnFRytSC1M72rrYnY1DgOF1LkNlzqEGzM9IVdN5WtiecTsgSA9noTtHOWBfk2kv_8BNb3gIzrCDZjvzOeRQiIZh4FMKgWrY-VCG7K66otUkkFtvpr1rIQf-pDWUoaHngGncoRKPfwXgz4OAGLIUdml50JEiHGI22julh81D8xnngDgZ7Z-Gc_Vd5gjhEZW26oWCQltJXl9RSBPp9akOS5UxpOcnDsRR2Fmi0s1K-YNiI1KvwEeonKpEqQlYBQVnJO5iD-__nBL5VOTgdPkeNKBrewxO4mtTT7iJzF3n1k9UDsbCh57I48scym4KOsel5YfRwqg";

  // debounced
  const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const handlePinCodeChanged = myDebounce(async () => {
    if (pincode !== "") {
      try {
        const baseURL = `https://apidev.mahindradealerrise.com/geography/pincodes?pincode=${pincode}`;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
            Accesstoken: accessToken,
          },
        };

        const response = await axios.get(baseURL, config);

        const { data } = response.data;

        if (response.data.statusCode === 200) {
          const stateList = data.pinCodeDetails[0]?.stateName;

          const cityList = data.pinCodeDetails[0]?.cityName;

          const districtList = data.pinCodeDetails[0]?.districtName;

          setState([{ name: stateList }]);

          setCity([{ name: cityList }]);

          setDistrict([{ name: districtList }]);
        }

        if (response.data.statusCode === 400) {
          setPinCodeError(response.data.errors);
        }
      } catch (error) {
        console.log("pincode fetch error:", error);
      }
    }
  }, 500);

  // address checks
  const [isSameAsPermanent, setIsSameAsPermanent] = useState(false);

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
                  backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                }}
              />
              {/* contents */}
              {/* grid design */}
              <div className="grid">
                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    First Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter first name"
                    inputTypes="text"
                    text={values[0]?.first_name}
                    name="first_name"
                    // defaultValue={values[0]?.first_name}
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    Last Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter last name"
                    inputTypes="text"
                    text={values[0]?.last_name}
                    name="last_name"
                    // defaultValue={values[0]?.last_name}
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    Mother's Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Enter mother's name"
                    inputTypes="text"
                    text={values[0]?.mother_name}
                    name="mother_name"
                    // defaultValue={values[0]?.mother_name}
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    Date of Birth<span style={{ color: "red" }}>*</span>
                  </label>
                  <ConfigProvider>
                    <SingleDatePicker
                      handleChange={handleDatePickerChange}
                      value={values[0]?.date_birth}
                      // errors={errors.date_birth}
                      // touched={touched.date_birth}
                      name="dates"
                    />
                    {/* error
                    {touched.date_birth && errors.date_birth ? (
                <p className="errors">{errors.date_birth}</p>
              ) : null} */}
                  </ConfigProvider>
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    Gender<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={genderItems}
                    selectedText={values[0]?.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="gender"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    Aadhaar Card no.<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Aadhaar Card no."
                    inputTypes="text"
                    // text={values.first_name}
                    name="mother_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    PAN Card no.<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="PAN Card no."
                    inputTypes="text"
                    // text={values.first_name}
                    name="mother_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    Mobile Number<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="+91 9876543210"
                    inputTypes="text"
                    // text={values.first_name}
                    name="mother_name"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    Email Address<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="example@gmail.com"
                    inputTypes="text"
                    // text={values.first_name}
                    name="email_address"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    Monthlt Salary<span style={{ color: "red" }}>*</span>
                  </label>
                  <InputField
                    types="text"
                    placeholder="Monthly salary in INR"
                    inputTypes="text"
                    // text={values.first_name}
                    name="monthly_salary"
                    // errors={errors.first_name}
                    // touched={touched.first_name}
                    // handleChange={handleChange}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    Date of Joining<span style={{ color: "red" }}>*</span>
                  </label>
                  <ConfigProvider>
                    <SingleDatePicker
                      handleChange={handleDatePickerChange}
                      value=""
                      // errors={errors.date_birth}
                      // touched={touched.date_birth}
                      name="dates_2"
                    />
                    {/* error
                    {touched.date_birth && errors.date_birth ? (
                <p className="errors">{errors.date_birth}</p>
              ) : null} */}
                  </ConfigProvider>
                </div>
              </div>
              {/* divider */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                }}
              />
              {/* flex design */}
              <div className="addressContainer">
                <h5>Permanent Address</h5>
                <div className="flex">
                  <div className="gridItems">
                    <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                      Permanent Address Line 1
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <InputField
                      types="text"
                      placeholder="House/Flat/Block No./Apartment Name"
                      inputTypes="text"
                      // text={values.first_name}
                      name="address1"
                      // errors={errors.first_name}
                      // touched={touched.first_name}
                      // handleChange={handleChange}
                    />
                  </div>

                  <div className="gridItems">
                    <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                      Permanent Address Line 2
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <InputField
                      types="text"
                      placeholder="Road/Area/Landmark"
                      inputTypes="text"
                      // text={values.first_name}
                      name="address2"
                      // errors={errors.first_name}
                      // touched={touched.first_name}
                      // handleChange={handleChange}
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
                {/* residential address */}
                <div className="residentialAddress">
                  <h5>Residential Address</h5>
                  {/* same as Permanent */}

                  <div
                    className="checkBoxPermanent"
                    onClick={() => setIsSameAsPermanent(!isSameAsPermanent)}
                  >
                    <span className="checkbox">
                      {isSameAsPermanent && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                        >
                          <path
                            d="M3.23158 6.1272C3.09084 6.12783 2.95552 6.07293 2.85499 5.97443L1.09804 4.21748C1.04207 4.16955 0.996603 4.11056 0.964507 4.04422C0.932411 3.97788 0.914376 3.90562 0.911531 3.83198C0.908687 3.75833 0.921095 3.6849 0.947978 3.61628C0.974861 3.54766 1.01564 3.48534 1.06775 3.43323C1.11986 3.38112 1.18218 3.34034 1.2508 3.31346C1.31942 3.28658 1.39285 3.27417 1.46649 3.27701C1.54013 3.27986 1.61239 3.29789 1.67873 3.32999C1.74507 3.36209 1.80406 3.40755 1.852 3.46352L3.22242 4.83394L7.32526 0.78533C7.37457 0.735466 7.43327 0.695878 7.49798 0.66886C7.56269 0.641842 7.63212 0.62793 7.70224 0.62793C7.77237 0.62793 7.84179 0.641842 7.9065 0.66886C7.97121 0.695878 8.02992 0.735466 8.07922 0.78533C8.17881 0.885517 8.23471 1.02104 8.23471 1.16231C8.23471 1.30357 8.17881 1.4391 8.07922 1.53929L3.59978 5.96526C3.55272 6.01597 3.49577 6.0565 3.43245 6.08435C3.36912 6.1122 3.30076 6.12679 3.23158 6.1272Z"
                            fill="#FF3E5B"
                          ></path>
                        </svg>
                      )}
                    </span>
                    <span
                      style={{
                        color: isSameAsPermanent
                          ? "#FF3E5B"
                          : theme === "light"
                          ? "#858585"
                          : "#858585",
                      }}
                    >
                      Same as permanent address
                    </span>
                  </div>
                </div>

                <div className="flex">
                  <div className="gridItems">
                    <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                      Permanent Address Line 1
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <InputField
                      types="text"
                      placeholder="House/Flat/Block No./Apartment Name"
                      inputTypes="text"
                      // text={values.first_name}
                      name="address1"
                      // errors={errors.first_name}
                      // touched={touched.first_name}
                      // handleChange={handleChange}
                    />
                  </div>

                  <div className="gridItems">
                    <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                      Permanent Address Line 1
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <InputField
                      types="text"
                      placeholder="House/Flat/Block No./Apartment Name"
                      inputTypes="text"
                      // text={values.first_name}
                      name="address1"
                      // errors={errors.first_name}
                      // touched={touched.first_name}
                      // handleChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* divider */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#E6E6E6" : "",
                }}
              />

              {/* grid */}
              <div className="grid" style={{ marginTop: 20 }}>
                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    PIN Code<span style={{ color: "red" }}>*</span>
                  </label>
                  {/* input */}
                  <div className="pincodeSearchInputs">
                    <InputField
                      types="text"
                      placeholder="Enter"
                      inputTypes="tel"
                      name="pincode"
                      maxLength={6}
                      text={pincode && pincode}
                      errors={pinCodeError}
                      // touched={touched.first_name}
                      handleChange={setPincode}
                    />
                    {pincode && (
                      <>
                        {/* empty pincode text */}
                        <span
                          onClick={() => {
                            setPincode("");
                            setDistrict([]);
                            setCity([]);
                            setState([]);
                            setPinCodeError("");
                          }}
                          className="emptyPincode"
                        >
                          <svg
                            role="presentation"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <circle
                              cx="6"
                              cy="6.00098"
                              r="6"
                              fill="#0B0B0C"
                            ></circle>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.79465 3.13888C9.055 3.39923 9.01279 3.86356 8.70037 4.17597L4.17488 8.70146C3.86246 9.01388 3.39814 9.05609 3.13779 8.79574C2.87744 8.53539 2.91965 8.07107 3.23207 7.75865L7.75756 3.23317C8.06998 2.92075 8.5343 2.87854 8.79465 3.13888Z"
                              fill="white"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.18582 3.13888C3.44617 2.87854 3.91049 2.92075 4.22291 3.23317L8.7484 7.75865C9.06081 8.07107 9.10303 8.53539 8.84268 8.79574C8.58233 9.05609 8.11801 9.01388 7.80559 8.70146L3.2801 4.17597C2.96768 3.86356 2.92547 3.39923 3.18582 3.13888Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>

                        {/* search icons */}
                        <span
                          className="searchIcons"
                          onClick={() => handlePinCodeChanged()}
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
                              d="M8.69565 2C4.99775 2 2 4.99775 2 8.69565C2 12.3936 4.99775 15.3913 8.69565 15.3913C10.3646 15.3913 11.891 14.7807 13.0635 13.7706L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L13.7706 13.0635C14.7807 11.891 15.3913 10.3646 15.3913 8.69565C15.3913 4.99775 12.3936 2 8.69565 2ZM3 8.69565C3 5.55003 5.55003 3 8.69565 3C11.8413 3 14.3913 5.55003 14.3913 8.69565C14.3913 11.8413 11.8413 14.3913 8.69565 14.3913C5.55003 14.3913 3 11.8413 3 8.69565Z"
                              fill="#FF3E5B"
                            />
                          </svg>
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    State<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={state}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="state"
                    // touched={touched.gender}
                    // errors={errors.gender}
                    disabled={!city.length}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    District<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={district}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="district"
                    // touched={touched.gender}
                    // errors={errors.gender}
                    disabled={!district.length}
                  />
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
                    City<span style={{ color: "red" }}>*</span>
                  </label>
                  <Dropdown
                    items={city}
                    // selectedText={values.gender}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="state"
                    // touched={touched.gender}
                    // errors={errors.gender}
                    disabled={!city.length}
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>bank Name</label>
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
                </div>

                {/* <div className="gridItems">
                  <label style={{ color: "#545454" }}>bank branch</label>
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
                </div> */}

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>Bank Address</label>
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
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>Bank Account No.</label>
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
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>IFSC code</label>
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
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>MICR No.</label>
                  <InputField
                    types="text"
                    placeholder="Enter"
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>Qualifications</label>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
              <button
                type="button"
                onClick={() => setAddTableData(!addTableData)}
              >
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>
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
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>From Date</label>
                  <ConfigProvider>
                    <SingleDatePicker
                      handleChange={handleDatePickerChange}
                      value=""
                      // errors={errors.date_birth}
                      // touched={touched.date_birth}
                      name="dates_2"
                    />
                    {/* error
                    {touched.date_birth && errors.date_birth ? (
                <p className="errors">{errors.date_birth}</p>
              ) : null} */}
                  </ConfigProvider>
                </div>

                <div className="gridItems">
                  <label style={{ color: theme === "light" ? "#545454" : "#858585" }}>To Date</label>
                  <ConfigProvider>
                    <SingleDatePicker
                      handleChange={handleDatePickerChange}
                      value=""
                      // errors={errors.date_birth}
                      // touched={touched.date_birth}
                      name="dates_2"
                    />
                    {/* error
                    {touched.date_birth && errors.date_birth ? (
                <p className="errors">{errors.date_birth}</p>
              ) : null} */}
                  </ConfigProvider>
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
