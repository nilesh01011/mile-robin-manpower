import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function SidebarSearchInput({
  setSearchMenuItems,
  searchMenuItems,
  setSearchBoxClicked,
  onSearch,
}) {
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <input
        placeholder="Search menu..."
        onChange={(e) => onSearch(e.target.value)}
        // onChange={(e) => setSearchMenuItems(e.target.value)}
        value={searchMenuItems}
        type="search"
        style={{
          color: theme === "light" ? "black" : "white",
          backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
          borderColor: theme === "light" ? "#b5b5b6" : "#342c2c"
        }}
        className={`SearchInput ${
          theme === "dark" ? "DarkSearchInput" : "LightSearchInput"
        }`}
        onClick={() => setSearchBoxClicked(true)}
      />
      <svg
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        onClick={() => setSearchMenuItems("")}
      >
        <circle
          cx="6"
          cy="6.00098"
          r="6"
          fill={theme === "light" ? "#0B0B0C" : "#ffffff"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.79465 3.13888C9.055 3.39923 9.01279 3.86356 8.70037 4.17597L4.17488 8.70146C3.86246 9.01388 3.39814 9.05609 3.13779 8.79574C2.87744 8.53539 2.91965 8.07107 3.23207 7.75865L7.75756 3.23317C8.06998 2.92075 8.5343 2.87854 8.79465 3.13888Z"
          fill={theme === "light" ? "white" : "black"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.18582 3.13888C3.44617 2.87854 3.91049 2.92075 4.22291 3.23317L8.7484 7.75865C9.06081 8.07107 9.10303 8.53539 8.84268 8.79574C8.58233 9.05609 8.11801 9.01388 7.80559 8.70146L3.2801 4.17597C2.96768 3.86356 2.92547 3.39923 3.18582 3.13888Z"
          fill={theme === "light" ? "white" : "black"}
        />
      </svg>
    </>
  );
}

export default SidebarSearchInput;
