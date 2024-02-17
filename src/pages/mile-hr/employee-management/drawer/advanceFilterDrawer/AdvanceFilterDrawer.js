import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Overlay from "../../../../../components/overlay/Overlay";
import Dropdown from "../../../../../components/dropdown/Dropdown";
import CalendarInput from "../../../../../components/calendarInput";
import { ConfigProvider } from "antd";
import SingleDatePicker from "../../../../../components/date/singleDatePicker/SingleDatePicker";

function AdvanceFilterDrawer({ advanceFilterSearch, setAdvancedFilterSearch }) {
  const theme = useSelector((state) => state.theme);

  // Business Type text
  const [businessTypeText, setBusinessTypeText] = useState("");
  // Dealer Code/Location text
  const [dealerText, setDealerText] = useState("");
  // Employee Status text
  const [employeeStatus, setEmployeeStatus] = useState("");
  // From to date
  const [fromToDate, setFromToDate] = useState("");
  // to date
  const [toDate, setToDate] = useState("");

  const businessTypeDropdown = [
    {
      name: "Dropdown 1",
    },
    {
      name: "Dropdown 2",
    },
    {
      name: "Dropdown 3",
    },
  ];

  const handleDatePickerChange = (dateString) => {
    // handleChange
    // handleChange("date_birth")(dateString);
    // console.log(dateString);
  };
  return (
    <>
      <Overlay
        showOverlay={advanceFilterSearch}
        hideOverlay={setAdvancedFilterSearch}
      />
      <div
        className="drawerContainer advanceFilterContainer"
        style={{
          backgroundColor: theme === "light" ? "#FFF" : "#0B0B0C",
          width: "34%",
          right: advanceFilterSearch ? 0 : "-150%",
        }}
      >
        {/* drawer header */}
        <div
          className="advanceFilterHeader"
          style={{
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "rgb(255 255 255 / 15%) 0px 1px 1px 0px",
          }}
        >
          {/* text */}
          <span className="drawerTitle">Advance Filters</span>
          {/* icons */}
          <span style={{ cursor: "pointer" }} onClick={() => setAdvancedFilterSearch(!advanceFilterSearch)}>
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
                d="M3.45529 3.45535C3.61801 3.29263 3.88183 3.29263 4.04455 3.45535L9.99992 9.41072L15.9553 3.45535C16.118 3.29263 16.3818 3.29263 16.5445 3.45535C16.7073 3.61807 16.7073 3.88189 16.5445 4.04461L10.5892 9.99998L16.5445 15.9554C16.7073 16.1181 16.7073 16.3819 16.5445 16.5446C16.3818 16.7073 16.118 16.7073 15.9553 16.5446L9.99992 10.5892L4.04455 16.5446C3.88183 16.7073 3.61801 16.7073 3.45529 16.5446C3.29257 16.3819 3.29257 16.1181 3.45529 15.9554L9.41066 9.99998L3.45529 4.04461C3.29257 3.88189 3.29257 3.61807 3.45529 3.45535Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        {/* drawer contents */}
        <div className="advanceFilterContentsGrid">
          <div className="gridItems">
            <label style={{ color: "#545454" }}>Business Type</label>
            <Dropdown items={businessTypeDropdown} />
          </div>

          <div className="gridItems">
            <label style={{ color: "#545454" }}>Dealer Code/Location</label>
            <Dropdown items={businessTypeDropdown} />
          </div>

          <div className="gridItems">
            <label style={{ color: "#545454" }}>Employee Status</label>
            <Dropdown items={businessTypeDropdown} />
          </div>

          <div className="gridItems">
            <label style={{ color: "#545454" }}>Approval Status</label>
            <Dropdown items={businessTypeDropdown} />
          </div>
          {/* date */}
          <div className="gridItems">
            <label style={{ color: "#545454" }}>From Date</label>
            {/* <CalendarInput /> */}
            <ConfigProvider>
              <SingleDatePicker
                // onChange={handleDatePickerChange}
                handleChange={handleDatePickerChange}
                // errors={errors.date_birth}
                // touched={touched.date_birth}
                name="date_birth"
              />
              {/* error */}
              {/* {touched.date_birth && errors.date_birth ? (
                <p className="errors">{errors.date_birth}</p>
              ) : null} */}
            </ConfigProvider>
          </div>

          <div className="gridItems">
            <label style={{ color: "#545454" }}>To Date</label>
            {/* <CalendarInput /> */}
            <ConfigProvider>
              <SingleDatePicker
                // onChange={handleDatePickerChange}
                handleChange={handleDatePickerChange}
                // errors={errors.date_birth}
                // touched={touched.date_birth}
                name="date_birth"
              />
              {/* error */}
              {/* {touched.date_birth && errors.date_birth ? (
                <p className="errors">{errors.date_birth}</p>
              ) : null} */}
            </ConfigProvider>
          </div>
        </div>
        {/* footer */}
        <div
          className="advanceFilterFooter"
          style={{
            boxShadow:
              theme === "light"
                ? "0px -2px 4px 0px rgba(0, 0, 0, 0.15)"
                : "rgb(255 255 255 / 15%) 0px -1px 1px 0px",
          }}
        >
          <button className="outlineBtn btns" type="reset">
            Reset
          </button>
          <button className="primaryBtn btns" type="button">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default AdvanceFilterDrawer;
