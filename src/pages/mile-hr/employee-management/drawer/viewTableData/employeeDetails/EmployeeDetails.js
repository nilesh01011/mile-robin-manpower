import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../../../../../../components/inputField/InputField";
import { ConfigProvider } from "antd";
import SingleDatePicker from "../../../../../../components/date/singleDatePicker/SingleDatePicker";
import Dropdown from "../../../../../../components/dropdown/Dropdown";

function EmployeeDetails({ employeeDrawerData, userNameSplit }) {
  const theme = useSelector((state) => state.theme);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const [editData, setEditData] = useState(false);

  const genderItems = [
    {
      name: "male",
    },
    {
      name: "female",
    },
  ];

  // date on changed
  const handleDatePickerChange = (dateString) => {
    // handleChange
    // handleChange("date_birth")(dateString);
    console.log(dateString);
  };
  // address checks
  const [isSameAsPermanent, setIsSameAsPermanent] = useState(false);

  const accessToken =
    "eyJraWQiOiJMVndUWU1OOTg4eUZwbDkyMGxoVzIxQ2NYYWF6ckk0aE1ZYndpSDV5d1Q4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MDAzOGU0My05NzhjLTQ2YWUtYmRiNy0wNTBlMDcxMDVlOTAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX0VKbWNiS1pyaiIsImNsaWVudF9pZCI6IjU4bTZxOGtucDE5Y2M5NGplZ2x1bnA0bXQ4Iiwib3JpZ2luX2p0aSI6IjdmMzFkMjBmLTY2NzMtNDY1Ni1iOThlLWY4OTExODAwY2JhMyIsImV2ZW50X2lkIjoiODkzOWE1ZTUtYjlhOS00MTQyLTkxZDUtNzljZjg5ZTkyY2JlIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTcwODc2MDMxOSwiZXhwIjoxNzA4NzYzOTE5LCJpYXQiOjE3MDg3NjAzMTksImp0aSI6IjBmODA4YjU4LTQxNzktNDZhMi1iYzMzLTU5MDlmYzc0OWI0NSIsInVzZXJuYW1lIjoicmVlbmEifQ.G2CY4_8zhq028SCuUI9-UAL14qoEkKdXE3qxaxnVYo14NmuuQDFbb0ijIHw5iztjHvhZXYgROoCqWm3wTYgYkNz1OrQ36vhz870QYkR7pJ5lm1-eE7xi29JJRoDYNWlzF4zxBHoYJ7S-ty7NlSTD_edlk4PlQAoziAZRy1XCe6r7rj1uGQ-L9_3e3mft6fzq8CjqHuh_EE8AC90Nhy6SqJ3lItlLLQGepEdGU0YoeikAYcfukB6rrwTNozMMVO1czaqL0EP72SzWLDdnTtLagAjes6iF-xLSTs8Dyary496louky4r5oAWTGDOIGisaKYrRGlJhu8uNT5KpKWhzo5A";
  const authorization =
    "eyJraWQiOiJkR1lMQWhzS1JNK092SlwvMlRKRkdTYVJxcFVuN3RsZ0R2SkpTVkhhT3REND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0MDAzOGU0My05NzhjLTQ2YWUtYmRiNy0wNTBlMDcxMDVlOTAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9FSm1jYktacmoiLCJjb2duaXRvOnVzZXJuYW1lIjoicmVlbmEiLCJvcmlnaW5fanRpIjoiN2YzMWQyMGYtNjY3My00NjU2LWI5OGUtZjg5MTE4MDBjYmEzIiwiYXVkIjoiNThtNnE4a25wMTljYzk0amVnbHVucDRtdDgiLCJldmVudF9pZCI6Ijg5MzlhNWU1LWI5YTktNDE0Mi05MWQ1LTc5Y2Y4OWU5MmNiZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzA4NzYwMzE5LCJleHAiOjE3MDg3NjM5MTksImlhdCI6MTcwODc2MDMxOSwianRpIjoiNmQ0NGJkNWMtOWY5Ny00OTBjLWJiNWEtNDZkZWY5NjY1ZmUwIiwiZW1haWwiOiJhbmtpdGF5OTEyODhAZ21haWwuY29tIn0.xUDHoWRzFrCUKB-0ERi8GHGHw2osk7ZZaJPgKb-aqenQZkUsbmsekLn8CnpmSLeJzl1WzihAu4TfElq1h2hb_nl1tO9MwTiO2rGbjHJV8lDPXtcs-0kb4KYZT9AOA2DEUZ7cqHVmM-MteUXjGygDC76oDVwkXW0qA6tJ9UDvcX4j_SJpycEScpCL-RT4dkcjEekyT6KThZMp2dtzdF5jqG8wdTDa7ELBKFUJzbURaRZwlAdU2zhKKYwGF1HXORezFl5p8RAA7rTjmir9nSXTRE6M9yU-GrWgrjaafHFQxmMPq4--yUD3JCS6L1YF10B36KMih3TXgji6M9qVgmlMTg";

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

  const [pincode, setPincode] = useState("");

  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const [district, setDistrict] = useState([]);

  const [pinCodeError, setPinCodeError] = useState("");

  const handlePinCodeChanged = myDebounce(async () => {
    if (pincode !== "") {
      try {
        const baseURL = `/geography/pincodes?pincode=${pincode}`;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
            Accesstoken: accessToken,
          },
        };

        const response = await axios.get(baseURL, config);

        const { data } = response.data;

        console.log(data);

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
          <h5>Employee Details</h5>
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
                  placeholder="Enter aadhaar no. e.g (1111 2222 3333)"
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
                  placeholder="Enter pan no. e.g. (AAAAA8888A)"
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
                  placeholder="Enter 10 digits mobile number"
                  inputTypes="tel"
                  maxLength={10}
                  text="9987577635"
                  // text={values.first_name}
                  name="mobilenumber"
                  // errors={errors.first_name}
                  // touched={touched.first_name}
                  // handleChange={handleChange}
                />
              ) : (
                <span>+91 9987577635</span>
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
                Monthly Salary (INR)
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
                <InputField
                  types="text"
                  placeholder="Enter Amount"
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

          {/* Permanent address */}
          <h5>Permanent Address</h5>
          <div className="flex">
            <div className="gridItems">
              <label style={{ color: "#545454" }}>
                Permanent Address Line 1
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
                <InputField
                  types="text"
                  placeholder="House/Flat/Block No./Apartment Name"
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
                Permanent Address Line 2
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
                <InputField
                  types="text"
                  placeholder="Road/Area/Landmark"
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
            {editData && (
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
            )}
          </div>

          <div className="flex">
            <div className="gridItems">
              <label style={{ color: "#545454" }}>
                Residential Address Line 1
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
                <InputField
                  types="text"
                  placeholder="House/Flat/Block No./Apartment Name"
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
                Residential Address Line 2
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
                <InputField
                  types="text"
                  placeholder="Road/Area/Landmark"
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
                PIN Code
                {editData && <span style={{ color: "red" }}>*</span>}
              </label>
              {editData ? (
                <div className="pincodeSearchInputs">
                  <InputField
                    types="text"
                    placeholder="Enter"
                    inputTypes="tel"
                    name="pincode"
                    maxLength={6}
                    text={pincode && pincode}
                    errors={pinCodeError}
                    touched={pinCodeError}
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
              ) : (
                <span>{pincode ? pincode : "--"}</span>
              )}
              {/* error */}
              {pinCodeError && <p className="errors">{pinCodeError}</p>}
            </div>

            {state.length !== 0 && pincode !== "" && (
              <div className="gridItems">
                <label style={{ color: "#545454" }}>
                  State
                  {editData && <span style={{ color: "red" }}>*</span>}
                </label>
                {editData ? (
                  <Dropdown
                    items={state}
                    selectedText={state[0].name}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="state"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                ) : (
                  <span>Maharashtra</span>
                )}
              </div>
            )}

            {district.length !== 0 && pincode !== "" && (
              <div className="gridItems">
                <label style={{ color: "#545454" }}>
                  District
                  {editData && <span style={{ color: "red" }}>*</span>}
                </label>
                {editData ? (
                  <Dropdown
                    items={district}
                    selectedText={district[0].name}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="district"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                ) : (
                  <span>Palghar</span>
                )}
              </div>
            )}

            {city.length !== 0 && pincode !== "" && (
              <div className="gridItems">
                <label style={{ color: "#545454" }}>
                  City
                  {editData && <span style={{ color: "red" }}>*</span>}
                </label>
                {editData ? (
                  <Dropdown
                    items={city}
                    selectedText={city[0].name}
                    // handleChange={(value) => handleChange("gender")(value)}
                    name="city"
                    // touched={touched.gender}
                    // errors={errors.gender}
                  />
                ) : (
                  <span>Virar</span>
                )}
              </div>
            )}
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
  );
}

export default EmployeeDetails;
