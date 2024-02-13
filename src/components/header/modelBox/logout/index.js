import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout({ handleCloseModel }) {
  const theme = useSelector((state) => state.theme);
  const router = useNavigate();

  const handleLogout = () => {
    router("/");
    document.querySelector("body").classList.remove("removeScrollbar");
    document.querySelector("body").style.overflow = "auto";
  };
  return (
    <div
      className="logoutContainer"
      style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
    >
      {/* heading */}
      <div className="heads">
        {/* text and icons */}
        <div className="textIcons">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 4.2C8.58761 4.2 4.2 8.58761 4.2 14C4.2 19.4124 8.58761 23.8 14 23.8C19.4124 23.8 23.8 19.4124 23.8 14C23.8 8.58761 19.4124 4.2 14 4.2ZM2.8 14C2.8 7.81441 7.81441 2.8 14 2.8C20.1856 2.8 25.2 7.81441 25.2 14C25.2 20.1856 20.1856 25.2 14 25.2C7.81441 25.2 2.8 20.1856 2.8 14ZM14 7.95182C14.3866 7.95182 14.7 8.26522 14.7 8.65182V8.75C14.7 9.1366 14.3866 9.45 14 9.45C13.6134 9.45 13.3 9.1366 13.3 8.75V8.65182C13.3 8.26522 13.6134 7.95182 14 7.95182ZM14 10.9667C14.3866 10.9667 14.7 11.2801 14.7 11.6667V19.8333C14.7 20.2199 14.3866 20.5333 14 20.5333C13.6134 20.5333 13.3 20.2199 13.3 19.8333V11.6667C13.3 11.2801 13.6134 10.9667 14 10.9667Z"
                fill="#FF7A00"
              />
            </svg>
          </span>
          <h4>Logout</h4>
        </div>
        {/* cancel icons */}
        <span style={{ cursor: "pointer" }} onClick={() => handleCloseModel()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.93181 1.9318C2.10754 1.75607 2.39247 1.75607 2.5682 1.9318L9 8.3636L15.4318 1.9318C15.6075 1.75607 15.8925 1.75607 16.0682 1.9318C16.2439 2.10754 16.2439 2.39246 16.0682 2.5682L9.6364 9L16.0682 15.4318C16.2439 15.6075 16.2439 15.8925 16.0682 16.0682C15.8925 16.2439 15.6075 16.2439 15.4318 16.0682L9 9.63639L2.5682 16.0682C2.39247 16.2439 2.10754 16.2439 1.93181 16.0682C1.75607 15.8925 1.75607 15.6075 1.93181 15.4318L8.36361 9L1.9318 2.5682C1.75607 2.39246 1.75607 2.10754 1.93181 1.9318Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
      {/* divider */}
      <div
        className="divider"
        style={{ backgroundColor: theme === "light" ? "#e6e6e6" : "#635d5d" }}
      ></div>
      {/* contents */}
      <div className="contents">
        <span>Are you sure you want to logout?</span>
        <div className="btns">
          <button
            type="cancel"
            title="Cancel"
            className="one"
            onClick={() => handleCloseModel()}
          >
            No
          </button>
          <button
            type="logout"
            title="Logout"
            className="two"
            onClick={() => handleLogout()}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
