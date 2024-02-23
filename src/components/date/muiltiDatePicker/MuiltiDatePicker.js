import React from "react";
import { DatePicker } from "antd";
import "../styles.scss";

const { RangePicker } = DatePicker;

const MyRangePicker = ({ onChange }) => {
  const handleRangePickerChange = (dates, dateStrings) => {
    onChange(dates); // Pass the selected dates to the parent component
  };

  return <RangePicker className="range" onChange={handleRangePickerChange} />;
};

export default MyRangePicker;
