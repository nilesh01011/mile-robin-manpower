import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import InputFields from "../../components/mileIDGenerate/inputFields/InputFields";

function SubmitData({ mileIDGenerate, values, handleDrawerClosed }) {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <div className="submitDataContainer">
        <div className="topSide">
          {/* animation div */}
          <div
            className={`animations ${
              theme === "light" ? "lightTheme" : "darkTheme"
            }`}
          >
            {/* ${theme === "light" && "light"} */}
            <span className={`checkIcons light `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
              >
                <path
                  d="M31.0406 0.560547C14.2483 0.560547 0.564453 14.2444 0.564453 31.0367C0.564453 47.8291 14.2483 61.5129 31.0406 61.5129C47.833 61.5129 61.5168 47.8291 61.5168 31.0367C61.5168 14.2444 47.833 0.560547 31.0406 0.560547ZM45.6083 24.0272L28.3283 41.3072C27.9016 41.7339 27.3225 41.9777 26.713 41.9777C26.1035 41.9777 25.5245 41.7339 25.0978 41.3072L16.473 32.6824C15.5892 31.7986 15.5892 30.3358 16.473 29.452C17.3568 28.5682 18.8197 28.5682 19.7035 29.452L26.713 36.4615L42.3778 20.7967C43.2616 19.9129 44.7245 19.9129 45.6083 20.7967C46.4921 21.6805 46.4921 23.1129 45.6083 24.0272Z"
                  fill="#56AC18"
                />
              </svg>
            </span>
            <span className="fadeInOut"></span>
          </div>
          {/* title */}
          <h1>Mile ID Generated Successfully</h1>
          {/* subtext */}
          <p>
            Mile ID is generated and has been sent to ASM/CCM for approval. Will
            be activated once approved.
          </p>
        </div>
        {/* id box */}
        <div
          className="generateIDContainer"
          style={{
            borderColor: theme === "light" ? "#E6E6E6" : "",
            boxShadow:
              theme === "light" ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)" : "",
          }}
        >
          {/* header side */}
          <div className="generateHeader">
            <p>Employee Status:</p>
            <span
              className={`label ${
                values?.employeeStatus
                  ? values.employeeStatus === true
                    ? "activeStatus"
                    : "inactiveStatus"
                  : "inactiveStatus"
              }`}
              style={{
                backgroundColor:
                  theme === "light"
                    ? values?.employeeStatus
                      ? values.employeeStatus === true
                        ? "#E2F9D2"
                        : "#FBD1D0"
                      : "#FBD1D0"
                    : "#FBD1D0",
              }}
            >
              {values?.employeeStatus ? values.employeeStatus : "Inactive"}
            </span>
          </div>
          {/* divider */}
          <div
            className="divider"
            style={{
              backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
            }}
          />
          {/* mile id inputs */}
          <InputFields mileId={8379380} />
        </div>
        {/* footer */}
        {/* <div
          className="actionEmployeeFooter"
          style={{
            boxShadow:
              theme === "light"
                ? "0px -2px 4px 0px rgba(0, 0, 0, 0.15)"
                : "rgb(255 255 255 / 15%) 0px -1px 1px 0px",
            backgroundColor: theme === "light" ? "#FFFFFF" : "#0B0B0C",
          }}
        >
          left btns
          <button
            className="btns outlineBtn"
            type="button"
            onClick={() => {
              handleDrawerClosed();
            }}
          >
            Cancel
          </button>

          <button
            className="btns outlineBtn"
            type="button"
            onClick={() => {
              handleDrawerClosed();
            }}
          >
            submitdata btn
          </button>
        </div> */}
      </div>
    </>
  );
}

export default SubmitData;
