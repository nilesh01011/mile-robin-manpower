import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../../../../../../../../components/inputField/InputField";
import { ConfigProvider } from "antd";
import SingleDatePicker from "../../../../../../../../components/date/singleDatePicker/SingleDatePicker";
import Dropdown from "../../../../../../../../components/dropdown/Dropdown";
import axios from "axios";

function EmployeeDetails({ values }) {
  const theme = useSelector((state) => state.theme);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const genderItems = [
    {
      name: "male",
    },
    {
      name: "female",
    },
  ];

  // address checks
  const [isSameAsPermanent, setIsSameAsPermanent] = useState(false);

  // Date onChange
  const handleDatePickerChange = (dateString) => {
    // handleChange
    // handleChange("date_birth")(dateString);
    // console.log(dateString);
  };

  // PIN Code
  const [pincode, setPincode] = useState("");

  const [state, setState] = useState([]);

  const [city, setCity] = useState([]);

  const [district, setDistrict] = useState([]);

  const [pinCodeError, setPinCodeError] = useState("");

  const accessToken =
    "eyJraWQiOiJMVndUWU1OOTg4eUZwbDkyMGxoVzIxQ2NYYWF6ckk0aE1ZYndpSDV5d1Q4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MDAzOGU0My05NzhjLTQ2YWUtYmRiNy0wNTBlMDcxMDVlOTAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX0VKbWNiS1pyaiIsImNsaWVudF9pZCI6IjU4bTZxOGtucDE5Y2M5NGplZ2x1bnA0bXQ4Iiwib3JpZ2luX2p0aSI6IjNmOWIxNTZlLTZmNmQtNDk5My05NGI5LWNhOGYwZmYyMjAxNyIsImV2ZW50X2lkIjoiMGJlNTZhNmQtOWQyYS00NWMyLWFkN2QtMzZjZGI2ODNhYTY2IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTcwODc1Njc2MCwiZXhwIjoxNzA4NzYwMzYwLCJpYXQiOjE3MDg3NTY3NjAsImp0aSI6IjA2ZjEzYjA2LTY2MTgtNDI4MC1hYzhkLTk4OTk2YTAyZTdmZiIsInVzZXJuYW1lIjoicmVlbmEifQ.Prxt9OByZ5EKtoVtdaj8pmscFNoaS1znV5hQdY4lAKRodMetHrXBBKzDykd0ws973laAqKKCox5iffMogMdK5kr27TTH6T0dDEfbJK6zaheAtBKycdQe3I6hv70cjTivG3RURdw-6QudPbhHVZNzCgUPdxXuXxK2fvSjtRs7wJNP4oR0cy-5xLbBwB2uvUxqTIUrhcods98TOhDFdE2cfU1yuhIeHjMmJNO7Gb9HeUXZySdk59dRIbyNVPBa8GAmmCujargg-W_xCT4FGMJ1qexHIvFmiZf_-dEq0hxhdqLws161i_l0hmRB4fXM3BWg6r2cTD_l_M46WRDelbAacQyy";
  const authorization =
    "eyJraWQiOiJkR1lMQWhzS1JNK092SlwvMlRKRkdTYVJxcFVuN3RsZ0R2SkpTVkhhT3REND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0MDAzOGU0My05NzhjLTQ2YWUtYmRiNy0wNTBlMDcxMDVlOTAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9FSm1jYktacmoiLCJjb2duaXRvOnVzZXJuYW1lIjoicmVlbmEiLCJvcmlnaW5fanRpIjoiM2Y5YjE1NmUtNmY2ZC00OTkzLTk0YjktY2E4ZjBmZjIyMDE3IiwiYXVkIjoiNThtNnE4a25wMTljYzk0amVnbHVucDRtdDgiLCJldmVudF9pZCI6IjBiZTU2YTZkLTlkMmEtNDVjMi1hZDdkLTM2Y2RiNjgzYWE2NiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzA4NzU2NzYwLCJleHAiOjE3MDg3NjAzNjAsImlhdCI6MTcwODc1Njc2MCwianRpIjoiOWMzMzZlZDEtMTBlNC00MDIwLTk2MTItYjc5MmMxNTQzMWU5IiwiZW1haWwiOiJhbmtpdGF5OTEyODhAZ21haWwuY29tIn0.JfshKCw4iSaDxd9s6bZyTJROXfNYWcbYI4QaKFGF6vtsqwmJeDX4YqnZK-JFlJEKm95oha_4WsYQcUpZUlWTwEzRKIXoE1U0wU283b3Wu3EbLKZDO22YoOS5pi9abtVPZ6Oesd739SenpXoZE7crySXxC246NPLjuLzb8CkzEIyCExe0O0trkTZ_JTxbmThXcGQzxzXdC5cccjLUUPtgq5P5P3fdsUyqRSL0drRHqW0wwBwhkkmQ4BXT22QGGKW_x98chrcCPx0ZKBSQtenFyAMOVnJqXz1sIO2pWbTmdQI8bFatKLrpEpQWP36F8XrvPCUb-qlsAkApD-HdPQshFA";

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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
                Aadhaar Card no.<span style={{ color: "red" }}>*</span>
              </label>
              <InputField
                types="text"
                placeholder="Enter aadhaar no. e.g (1111 2222 3333)"
                inputTypes="text"
                // text={values.first_name}
                name="mother_name"
                // errors={errors.first_name}
                // touched={touched.first_name}
                // handleChange={handleChange}
              />
            </div>

            <div className="gridItems">
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
                PAN Card no.<span style={{ color: "red" }}>*</span>
              </label>
              <InputField
                types="text"
                placeholder="Enter pan no. e.g. (AAAAA8888A)"
                inputTypes="text"
                // text={values.first_name}
                name="mother_name"
                // errors={errors.first_name}
                // touched={touched.first_name}
                // handleChange={handleChange}
              />
            </div>

            <div className="gridItems">
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
                Mobile Number<span style={{ color: "red" }}>*</span>
              </label>
              <InputField
                types="text"
                placeholder="Enter 10 digits mobile number"
                inputTypes="text"
                // text={values.first_name}
                name="mother_name"
                // errors={errors.first_name}
                // touched={touched.first_name}
                // handleChange={handleChange}
              />
            </div>

            <div className="gridItems">
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
                <label
                  style={{
                    color: theme === "light" ? "#545454" : "#858585",
                  }}
                >
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
                <label
                  style={{
                    color: theme === "light" ? "#545454" : "#858585",
                  }}
                >
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
                <label
                  style={{
                    color: theme === "light" ? "#545454" : "#858585",
                  }}
                >
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
                <label
                  style={{
                    color: theme === "light" ? "#545454" : "#858585",
                  }}
                >
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
              <label
                style={{ color: theme === "light" ? "#545454" : "#858585" }}
              >
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
            </div>

            {state.length !== 0 && pincode !== "" && (
              <div className="gridItems">
                <label style={{ color: "#545454" }}>
                  State
                  <span style={{ color: "red" }}>*</span>
                </label>
                <Dropdown
                  items={state}
                  selectedText={state[0].name}
                  // handleChange={(value) => handleChange("gender")(value)}
                  name="state"
                  // touched={touched.gender}
                  // errors={errors.gender}
                />
              </div>
            )}

            {district.length !== 0 && pincode !== "" && (
              <div className="gridItems">
                <label style={{ color: "#545454" }}>
                  District
                  <span style={{ color: "red" }}>*</span>
                </label>
                <Dropdown
                  items={district}
                  selectedText={district[0].name}
                  // handleChange={(value) => handleChange("gender")(value)}
                  name="district"
                  // touched={touched.gender}
                  // errors={errors.gender}
                />
              </div>
            )}

            {city.length !== 0 && pincode !== "" && (
              <div className="gridItems">
                <label style={{ color: "#545454" }}>
                  City
                  <span style={{ color: "red" }}>*</span>
                </label>
                <Dropdown
                  items={city}
                  selectedText={city[0].name}
                  // handleChange={(value) => handleChange("gender")(value)}
                  name="city"
                  // touched={touched.gender}
                  // errors={errors.gender}
                />
              </div>
            )}

            {/* state */}
            {/* <div className="gridItems">
            <label
              style={{ color: theme === "light" ? "#545454" : "#858585" }}
            >
              State<span style={{ color: "red" }}>*</span>
            </label>
            <Dropdown
              items={state}
              selectedText={state[0].name}
              // handleChange={(value) => handleChange("gender")(value)}
              name="state"
              // touched={touched.gender}
              // errors={errors.gender}
              disabled={!city.length}
            />
          </div> */}

            {/* district */}
            {/* <div className="gridItems">
            <label
              style={{ color: theme === "light" ? "#545454" : "#858585" }}
            >
              District<span style={{ color: "red" }}>*</span>
            </label>
            <Dropdown
              items={district}
              selectedText={district ? district[0].name : null}
              // handleChange={(value) => handleChange("gender")(value)}
              name="district"
              // touched={touched.gender}
              // errors={errors.gender}
              disabled={!district.length}
            />
          </div> */}

            {/* city */}
            {/* <div className="gridItems">
            <label
              style={{ color: theme === "light" ? "#545454" : "#858585" }}
            >
              City<span style={{ color: "red" }}>*</span>
            </label>
            <Dropdown
              items={city}
              selectedText={city ? city[0].name : null}
              // handleChange={(value) => handleChange("gender")(value)}
              name="state"
              // touched={touched.gender}
              // errors={errors.gender}
              disabled={!city.length}
            />
          </div> */}
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

export default EmployeeDetails;
