import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function ItemsList({ items }) {
  const theme = useSelector((state) => state.theme);
  
  return (
    <div
      className="ItemsList"
      style={{ borderColor: theme === "light" ? "#E6E6E6" : "#635d5d" }}
    >
      {/* left side */}
      <div className="leftSide">
        {/* message dot status */}
        <span className="status"></span>

        {/* title */}
        <h4>{items.title}</h4>
        {/* text */}
        <p style={{ color: "#858585" }}>
          Vehicle Tracking Details Will Be Updated.
        </p>
        {/* date and type */}
        <div className="subTest" style={{maxHeight:"20px"}}>
          <span style={{ color: theme === "light" ? "#545454" : "#b5b5b6" }}>Application Master</span>
          <span
            className="divider"
            style={{
              backgroundColor: theme === "light" ? "#E6E6E6" : "#635d5d",
            }}
          ></span>
          <span style={{ color: "#858585" }}>{items.date}</span>
        </div>
      </div>
      {/* right side icons */}
      <div className="rightSide" style={{ cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.9987 8.66732C8.36689 8.66732 8.66536 8.36884 8.66536 8.00065C8.66536 7.63246 8.36689 7.33398 7.9987 7.33398C7.63051 7.33398 7.33203 7.63246 7.33203 8.00065C7.33203 8.36884 7.63051 8.66732 7.9987 8.66732Z"
            fill="#FF3E5B"
            stroke="#FF3E5B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.9987 3.99935C8.36689 3.99935 8.66536 3.70087 8.66536 3.33268C8.66536 2.96449 8.36689 2.66602 7.9987 2.66602C7.63051 2.66602 7.33203 2.96449 7.33203 3.33268C7.33203 3.70087 7.63051 3.99935 7.9987 3.99935Z"
            fill="#FF3E5B"
            stroke="#FF3E5B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.9987 13.3333C8.36689 13.3333 8.66536 13.0349 8.66536 12.6667C8.66536 12.2985 8.36689 12 7.9987 12C7.63051 12 7.33203 12.2985 7.33203 12.6667C7.33203 13.0349 7.63051 13.3333 7.9987 13.3333Z"
            fill="#FF3E5B"
            stroke="#FF3E5B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default ItemsList;
